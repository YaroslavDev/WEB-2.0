### HW #4 - Asynchronous operation
---

Here I attach Express.js project, but HW #4 functionality is stored only in 2 files: __app.js__ and __customer.js__.  
__app.js__ defines callbacks for GET and DELETE methods.  
__customer.js__ defines customers structure and methods which operate with it. Also there is a monitor structure, which contains information about accepted requests.  

User can retrieve and delete data about concrete customer using _/customer/:id_ (using GET and DELETE methods, respectively). When DELETE method is received, application immediately sends 202(Accepted) code and returns request id. Then user can use GET method with that id _/monitor/id_ to check status of DELETE request. Application deletes customer in 10 seconds after DELETE was received. Possible status values for DELETE request are: "Processing..." and "Done!".

##### Tools

Created with [Nodeclipse](https://github.com/Nodeclipse/nodeclipse-1)
 ([Eclipse Marketplace](http://marketplace.eclipse.org/content/nodeclipse), [site](http://www.nodeclipse.org))   

Nodeclipse is free open-source project that grows with your contributions.
