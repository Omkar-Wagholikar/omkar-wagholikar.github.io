# Distributed Systems Deep Dive: Paxos

In this blog, we take a deep dive into Paxos, a foundational consensus algorithm used in distributed systems. Paxos plays a critical role in enabling multi-leader replication by ensuring consistency across nodes, even in the presence of failures.

While we focus primarily on vanilla Paxos, understanding it lays the groundwork for exploring more advanced forms like Multi-Paxos

## What is Paxos? 
Paxos is a distributed consensus algorithm meaning that it allows a cluster of nodes to agree on a single decision or value, it is able to reach consensus even if some nodes withing the cluster crash or messages are lost in transit.
    
We will be only discussing about **vanilla Paxos** in this blog, more complicated variants like **multi Paxos** are popular in multi leader replication schemas.
    
Here we define consensus is as a majority of nodes agreeing on a single decision, this could be any result.

--- 

## Keywords for Paxos:
There are 3 roles that a node may take, these nodes are not mutually exclusive and a single node may perform one or many of them simultaneously:
* **Proposers:** Propose a certain value or operation to the cluster
* **Acceptors:** Nodes that vote on the proposal and help the cluster reach consensus
* **Learners:** Nodes that are effectively followers, they are updated once consensus is reached 

**Proposal Number (ID):** It is a monotonically increasing unique identifier for each proposal (it is unique to each proposal)

**Promise:** It signifies the acceptors commitment to ignore all Proposal Numbers with lower value, a Promise may be broken if a request with a higher Proposal Number is received

---

## Underlying assumption made by Paxos:
1. **Stable storage for Promises and Accepted values:** If a node crashes then recovers all values it will still remember it’s promises and accepted values
2. **Cluster Awareness:** Each node knows how many acceptor nodes form a majority (Quorum)
3. **Fault Tolerance:** We are pretty relaxed with the network and hardware reliability, the algorithm function adequately even if one or more nodes crash or messages drop in transit
4. **Eventual Progress:** Every node in the cluster will reach a single consensus over time
5. **Immutable Consensus:** Once reached, consensus is immutable. Updates must go through a new round of consensus

---

## The Paxos Algorithm:

Let's say that we have one proposer and 3 acceptors, so to reach consensus, we much get 2 acceptors to agree on the sequence of events

The Algorithm works in **2 phases**, each phase needs a complete round trip over the network

---

### Phase 1: Prepare and Promise

1. The proposer proposed an operation, it generates a **PREPARE ID** and sends it to all (or a majority of) Acceptors
* These ID are unique and monotonically increasing
* No ID is ever reused (if at all there is a timeout, we get a new higher ID)
2. When an Acceptor receives a **PREPARE ID** message it first checks if it promised to ignore this message:
    * **If yes:** Nothing happens
    * **Else:**
        * It will then check if it previously **ACCEPTED** a proposal on the same entity:

        * **If yes:** it will send the **ACCEPTED** value in the response (also known as piggybacking) 
        * **Else:** 
            it will ignore any messages for that entity with a smaller ID and reply with a **PROMISE ID** (basically, given a **PREPARE `5`** message the acceptor will reply with a **PROMISE `5`** message)

---

### Phase 2: Accept/ Accepted 
3. When the Proposer gets a majority of **PROMISE** messages for a specific ID, it sends a **ACCEPT-REQUEST ID VALUE** to all acceptors 
    * If no Acceptor sends a piggybacked value, then the value in the **ACCEPT-REQUEST** is the actual value that the proposer wants to write 
    * Else, If there are piggybacked values (sent value not matching the received value) coming from the Acceptors then the Proposer will pick the value with the highest ID as the most recent one.
        It will then the **ACCEPT-REQUEST ID HIGHEST_ID_VALUE** to all acceptor nodes (this helps us to propagate missing values across the cluster so that each node can be in agreement on the sequence of events) 

        **NOTE:** Upon getting a majority **PROMISE** response from Acceptors, we can be sure that no ID `<` ID(current)  will make it through the cluster.

4. When an Acceptor receives a **ACCEPT-REQUEST** message for a given ID
    * It will check if it promised to ignore that ID:
        * **If yes:** Do nothing
        * **Else:** Reply with a **ACCEPT ID, value** to the proposer and send the message to all Learners
    
    If a majority of Acceptors send the **ACCEPT ID, VALUE** then consensus is reached. 
    
    It is important to note that the consensus is not on the ID but on the **value**. The ID is simply an internal artifact generated and only used by Paxos.

5. **Proposer/ Learner get ACCEPT message:** if they get a majority of ACCEPT then they know for sure that consensus has been reached

---

## Challenges (and ways to resolve them):
Let's say that there are 2 proposers, A and B

### Getting a Majority of Promises:
**Problem:**
* A sends a PREPARE 5, while B sends a PREPARE 4 at the same time
* Due to network latency, we can't be sure the order in which these are received
* A will be getting a majority of PROMISE on all nodes eventually
* B will never make it through

**Solution:**
* Timeout the ID and retry
* Note: This solution itself can cause contention creating hotspots

### Contention:
Specifically for Paxos this is also known as Dueling Proposers or Livelock

**Problem:**
* A sends a PREPARE 5 (let's say) it works and it receives corresponding PROMISE 5 from all 3 Acceptor Nodes
* Before it could send the ACCEPT_REQUEST message, B sends it's PREPARE 6 Message
* Being of a higher ID it's accepted (as no ACCEPT writes have happened yet)
* Before B can sends its own ACCEPT_REQUEST A comes back with its own PROMISE 7 message (which is also accepted)
* This creates a livelock where both proposers continuously pre-empt each other

**Solution:**
* Implement exponential backoff with some Jitter so that eventually either of A or B will have sufficient time to complete their operation
* More advanced implementations like Multi Paxos use stable leader election to avoid this issue

### Proposal Number Generation and management:
**Problem:**
* Proposal numbers need to be unique and increasing
* Collisions can create complexity in their resolution and may even result in unexpected behaviour from the system

**Solution:**
* One of the most common solutions is to use slotted timestamps (accuracy up to nano second) as the proposed ID's



While this post focused on the core concepts of Paxos, its real-world utility in systems using multi-leader replication becomes evident through optimized variants like Multi-Paxos.