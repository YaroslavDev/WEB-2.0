### HW #7 - Pagination
---

#### Description  

Main functionality is stored in __routes/users.js__. It has single callback which dynamically computes and returns as response range of users according to specified query parameters _page_ and _size_. It sets also Link Headers which give information about next and last page for given page size. Orders array is initialized as simple array with numbers from 0 to 99 in __app.js__.

#### Usage example(with POSTMAN)
__REQUEST>__: GET /orders?page=2&size=10  
__RESPONSE< STATUS 200 OK__  
```javascript
[
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19
]
```

Link →<localhost:3000/orders?page=3&size=10>; rel="next",  
 <localhost:3000/orders?page=10&size=10>; rel="last"

### Tools

Created with [Nodeclipse](https://github.com/Nodeclipse/nodeclipse-1)
 ([Eclipse Marketplace](http://marketplace.eclipse.org/content/nodeclipse), [site](http://www.nodeclipse.org))   

Nodeclipse is free open-source project that grows with your contributions.
