### HW #2 - Simple statefull/stateless server
---

#### 1. Server functionality

In both implementations server can process 3 types of requests:
	* open order (create new empty list)
	* add item to order (add some string to list)
	* process order (clear list)
	
All orders from all clients are store in global variable 'orders'. When clients requests to open new order, new index in 'orders' is allocated.
	
#### 2. Statefull version

File "statefull_server.js" contains implementation of simple statefull server. When client opens new order, server uses order index specifically allocated for this client. When client processes(finishes) order, it can request new one and new index will be created. Client can't operate with more than one order at a time.
	
#### 3. Stateless version

File "stateless_server.js" contains implementation of simple stateless server. When client opens new order, server allocates index for this client and returns this index to client. Client can proceed working with his order indicating in his request index of that order. Client can create new order without terminating previous one. In this way client can operate with more than one order at a time.