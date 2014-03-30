### HW #5 - Conditional GET
---

#### Description  

File __routes/customer.js__ contains callbacks for GET and PUT requests and function for computing strong and weak ETags.  
_computeWeakETag()_ computes MD5 hash based on customer id and name.  
_computeStrongETag()_ computes MD5 hash based on all customer fields(orders inclusively)  
There are 3 variables: _lastModified_, _weakETag_ and _strongETag_ which store: date when customers structure was last modified, weak ETag and strong ETag of customers structure, respectively.  
In PUT request callback we change these variables correspondingly.  
In GET request callback we look if GET request has __If-None-Match__ header, then it checks if value of header equals to value of weak ETag(can be replaced with strong ETag). If hashes are equal it returns 304 Not Modified, if not - retuns 200 and customers structure.  
If __If-Modified-Since__ header was specified, then it compares date in header with date of last modification. In __lastModified__ is less or equal than date in header it return 304 Not Modified, otherwise - 200 and customers structure.

#### Usage  
I use POSTMAN for sending request to my application:  
__Request>__  
GET localhost:3000/customers  
If-Modified-Since = Thu Dec 29 2011 20:14:56 GMT-0600 (CST)  
__Response<  STATUS 200 OK__  
```javascript
[
    {
        "id": 1,
        "name": "aaa",
        "orders": []
    },
    {
        "id": 2,
        "name": "bbb",
        "orders": []
    }
]
```  
Connection →keep-alive  
Content-Length →118  
Content-Type →application/json; charset=utf-8  
Date →Sun, 30 Mar 2014 17:29:02 GMT  
Last-Modified →Sun Mar 30 2014 19:26:27 GMT+0200 (CEST)  
X-Powered-By →Express

__Request>__   
GET localhost:3000/customers  
If-Modified-Since = Sun Mar 30 2014 19:26:28 GMT+0200 (CEST)  
__Response<  STATUS 304 Not Modified__  
Connection →keep-alive
Date →Sun, 30 Mar 2014 17:32:05 GMT  
Last-Modified →Sun Mar 30 2014 19:26:27 GMT+0200 (CEST)  
X-Powered-By →Express  

__Request>__  
PUT localhost:3000/customers/0  
{ id : 1, name : "zzz" }  
__Response<__ STATUS 200 OK  
Connection →keep-alive  
Content-Length →7  
Content-Type →text/html; charset=utf-8  
Date →Sun, 30 Mar 2014 17:36:30 GMT  
X-Powered-By →Express  

__Request>__  
GET localhost:3000/customers  
If-Modified-Since = Sun Mar 30 2014 19:26:28 GMT+0200 (CEST)  
__Response< STATUS 200 OK__  
```javascript
[
    {
        "id": "1",
        "name": "zzz",
        "orders": []
    },
    {
        "id": 2,
        "name": "bbb",
        "orders": []
    }
]
```  
Connection →keep-alive  
Content-Length →120  
Content-Type →application/json; charset=utf-8  
Date →Sun, 30 Mar 2014 17:38:24 GMT  
Last-Modified →Sun Mar 30 2014 19:36:30 GMT+0200 (CEST)  
X-Powered-By →Express  

### Tools

Created with [Nodeclipse](https://github.com/Nodeclipse/nodeclipse-1)
 ([Eclipse Marketplace](http://marketplace.eclipse.org/content/nodeclipse), [site](http://www.nodeclipse.org))   

Nodeclipse is free open-source project that grows with your contributions.
