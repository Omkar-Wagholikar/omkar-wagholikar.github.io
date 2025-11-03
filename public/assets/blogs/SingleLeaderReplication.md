# Distributed Systems Deep Dive: Single Leader Replication
## Introduction
In the previous **blog** we discussed replication, in this blog we will be going deeper. Looking specifically at **Single leader replication.** 

In this schema, all **writes** go through a single leader the cluster. This helps the cluster maintain strong consistency while greatly improving the read through put of the system.

### Types of Single leader replication: 
1. **Synchronous Single Leader replication**: This is blocking and ensures that data is written in all follower nodes before committing and completing a read event. Ensured strong integrity, also supports heterogenous writes (different writes going to different servers)
2. **Asynchronous single leader replication**: This is non blocking mode of replication, commonly implementation strategies include Log-Based replication, Snapshotting and Transaction replication.

In this blog we will be deep diving into **RAFT**, an algorithm used to  maintain a distributed log across a cluster with high consistency at reasonable speeds, as each node in the cluster contains the same log, any node can be queried for a read operation massively boosting the read throughput of the cluster while also enhancing reliability and resiliency of the system.

I have split the dive into two parts to better highlight the two main aspects of RAFT:
1. Choosing a leader node
2. Log replication (Writing to the cluster)

## Key Words
1. **Term (epoch)**: Monotonically increasing number used to track the order of elections (there is a single leader in a node, when the leader changes a new Term begins).
2. **Log Entry**: operation carried out along with the term in which it was carried out at some index in the log file
3. **Quorum**: The minimum number of votes or positive acknowledgements an operation must get for it to be valid
4. **Prefix**: The portion of the log up to and including the entry at `prevLogIndex` (identified by `prevLogIndex` and `prevLogTerm`).
5. **Suffix**: The new entries the leader wants to append after prevLogIndex.

## Leader Election
A leader periodically sends a heartbeat message to each node signalling that it's up.

When the cluster starts up each node picks an `election timeout` a randomly initiated amount of time for which it waits before concluding that the leader had died. 

As there is no leader picked on startup the system waits until someone times out and initiates the election

If the leader goes down, the followers wait until timeout until concluding that the leader is down. Upon reaching this concluding the follower will then start a new election for the next `term` (usually `term`+1 of the current the `term`) declaring itself a candidate for the next election

This candidate will then ask all other available nodes (followers, as the leader is assumed to have gone down) for a vote.

A follower casts its vote as `yes` if:
- the candidate's term is >= the follower's term and
- the follower has not already voted in this term
- the candidates log is at least as up-to-date as the followers (checked using the last log index and term).

The winner is decided when a candidate gets a quorum in votes, i.e. a majority of nodes have given a positive acknowledgement for the given candidate.

*Note*: The `election timeout` is randomly initialized to avoid the **Thundering Herd Problem**, i.e. Every node in the cluster simultaneously coming to the same conclusion and saturating the network with a large number of messages.

### What is the down leader comes back later?

In that case the term number acts as a fencing token, when the old-leader tries to propose a write its rejected by all up-to-date followers. This prevents split brain behavior and splintering within the cluster.

![image](./media/raft_leader_election.gif)

## RAFT Writes
To explain the working of the write we can walk through the flow for writes:
1. A client sends a write command to the leader.
2. The leader appends the entry to its log (but does not commit yet)
3. Leader sends a request to all followers including the `prevLogIndex` and `prevLogTerm` along with the new entry.
4. The follower checks if the received `prevLogIndex` and `prevLogTerm` matches it's own log
    - if **yes**: 
        The follower will append all entries sent by the server (but not commit them yet). It will then send a `yes` to the leader.

    - if **no**:
        The follower will send a rejection (`no`) response to the leader (this generally occurs if the follower is behind the leader lacking one or more entries in it's log)

        The leader then decrements `prevLogIndex` and retries until a match is found.

5. Once the leader receives `yes` message from a quorum (majority) of nodes. It then `commits` the entry and notifies all its followers to do the same.
6. The write is considered a success and the leader responds to the client.

![image](./media/raft_writing.gif)

## Invariants assumed by the algorithm:
1. **There is only one leader per term**: New leaders require a quorum, so only one leader can exist at a time.
2. **Logs are consistent across all nodes**: If node `A` has a longer log than node `B`, then `B`’s log is always a prefix of `A`’s. Followers that are behind are automatically corrected by the leader via AppendEntries backtracking.

## Conclusion:
1. RAFT provides fault tolerant linearizable storage by creating a distributed logging system.
2. Consensus is efficient and non blocking  but still slower than in memory operations and direct writes to a database.
3. The leader is a critical performance bottleneck as all writes (and based on the configuration all reads) go through it
4. It is fault tolerant and consistent.
5. It is not as strongly consistent as the two phase commit
6. Using Raft selectively for critical parts of a system makes sense, rather than for every component.

