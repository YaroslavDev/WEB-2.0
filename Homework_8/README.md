### HW #8 - Data access
---

#### Task 

| Resource 						| Format | GET                  | DELETE  |  
|								| 		|	                    |          |  
| http://company.at/customers  | XML 	| OAuth2.0, ATOM        | OAuth2.0 |  
| http://company.at/suppliers  | JSON	| OAuth2.0, JSONP       | OAuth2.0 |  
| http://weather.at/innsbruck  | XML	| CORS, ATOM            | OAuth2.0, CORS |  
| http://people.at/students    | JSON	| OAuth2.0, OpenID, CORS, JSONP | OAuth2.0, OpenID, CORS |  
| http://people.at/{dob}/contact|VCARD	| OAuth2.0, OpenID, CORS, hCard | OAuth2.0, OpenID, CORS |  

__Remarks:__  
* Service may also implement HTTP caching and pagination.
* GET weather.at/innsbruck is assumed to be easily accessed information, so it does not require authentication
* people.at resource is assumed to be kind of social network, so authentication to it can be performed using third-party authentication service(e.g. Facebook) => OpenID support
* In order to access resources from another origin policy, CORS technology is used.