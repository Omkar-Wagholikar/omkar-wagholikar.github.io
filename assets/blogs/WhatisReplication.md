# Distributed Systems Deep Dive: Durability and Replication
## What is durability?
Hardware can break, networks go down. Systems that are able to account for these unexpected events, able to work even when some part of them fails are called durable.

## Example:
Let's say we have a set of important **paper** documents that we want to protect. One possible solution would be to keep them in a highly secure vault (basically using a highly redundant single system) keeping them in a earthquake-flood proof location, but unexpected events. 

A much simpler solution would be to create **indistinguishable** copies of these documents and store them in a separate place.

In technology terms, we would translate this solution to:
 - Having multiple servers at different locations, 
 - Load Balancers to keep the system scalable able to distribute load across many servers to keep running, 
 - Consistent hashing rings to dynamically add, remove, and replicate partitions and many more 

One may use change data capture for their database as a way to essentially snapshot them.

But at the core of all this is replication, what is it? And how do we use replication to make a system fault tolerant?

## What is replication?

Replication is the process in which multiple duplicates of a system (here databases) are created, essentially, keep a bunch of databases and when one database changes the same change is reflected in other databases. 

This also creates the opportunity to solve problems that a single database instance simply cannot, like serving a massive concurrent read loads or having a write throughput far exceeding the physical capability of any single server

But as with almost every distributed system solution, things get complicated when multiple systems try talking to each other.

### Problems with replication

A classic example would be split brain, where different nodes within a network are separated into a disjoint set. Each partition is functional but isolated from the others. 

This creates, issues with maintaining a consistent state and sequence of events. Basically getting every node to agree on a single state of things.

Here we have several approaches to create an agreement, reaching a `consensus` so to speak withing the cluster. 

Keeping track of sequence of events gets challenging too, what is two separate clients connect to two separate servers and try to change the same element? Who wins? How do we decide?

### Consensus

Over time there are several solutions catering to specific use cases, having their own pros and cons.

Some of these approaches include:
1.  Single leader replication: 
    - One leader to control the state of the rest of group (DynamoDB)
    - Useful for systems where consistency is critical
    - Also well suited for solutions requiring high read throughput
2. Multi leader replication: 
    - Leaders who talk to each other, coordinating writes and updates  (MySQL clusters)
    - Useful when the system as a whole must be active in geographically distant areas
    - Gives better write thoughput but can cause problems with conflict resolution amond leader nodes
3. Leaderless replication: 
    - Clusters having no leaders at all, using quorum based methods to agree on transactions (Cassandra)
    - Well suited for very large scale systems.
    - Relies on vector clocks for eventual consistency.
4. Maintaining replica sets: 
    - Entire coordinated clusters with roles (Mongodb)
    - Maintains an operations log `oplog` to serialize the sequence of events
    - Ensured synchronization between replicas by tracking active members using a heartbeat mechanism.

Pros and Cons of replication:

Pros:

1. Increased availability: By providing redundant copies you can make sure that the cluster will always have the data, even if a single server fails
2. Improved resiliency: The system will be operational even if parts of it go down.
3. Scalability: The system is able to handle large quantities of data, scaling up or down as needed.

Cons:

1. Increased cost: Maintaining a cluster, the network and hardware required to keep the system running is fairly higher than maintaining a single database instance
2. Synchronization issues: Due to it's distributed nature, the system may need to backfill straggler nodes
3. Increased complexity: As the number of nodes in a cluster goes up the overhead of maintaining the system also goes up, this can create bottlenecks of its own
4. Security: Increased complexity can also create security hazards where malicious nodes or entities may have a better foothold to exploit unknown weakenesses to damage or posion the database in some way.


But replication is only half the story. When replicas disagree, how do we bring them back in sync? That’s where consensus protocols like Raft and Paxos enter the picture

In the next projects, we will deep dive into the inner working of these algorithms