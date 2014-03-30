### HW #3 - Resources, URIs, Operations
---
__Data model:__  
![Data model](https://raw.githubusercontent.com/YaroslavDev/WEB-2.0/master/Homework_3/Data_Model.png)  

__JSON data example__:  
```javascript
{
	places : [ { place_id : 0,    
				place_name : Chicago,  
				owner : 0 } ],  
	owners : [ { owner_id : 0,
				  owner_name : "John",
				  place : 0,
				  cars : [ { car_id : 0} ] ],
	cars   :  [ { car_id : 0,
				   car_model : "Mustang",
				   owner : 0,
				   plate : "5ZVR" } ],
	plates :  [ { plate_number : "5ZVR" } ]
}
```

__URIs__:  

*  __/owner__ - list of owners  
	HTTP method: GET  
	Status codes: 200 - ok, 400 - bad request  
*  __/owner/`<owner_id>`__ - return info about certain owner(his places and cars)  
	HTTP method: GET  
	Status codes: 200 - ok, 202 - no content, 400 - bad request, 404 - Not found  
	HTTP method: DELETE  
	Status codes: 202 - accepted, 400 - bad request, 404 - Not found  
	HTTP method: POST  
	Status codes: 202 - accepted, 400 - bad request  
	HTTP method: PUT  
	Status codes: 200 - ok, 400 - bad request, 404 - Not found
*  __/owner/?owner_name="John"__ - list owners whose names are John
*  __/owner/`<owner_id>`/cars/__ - list certain owner's cars
*  __/owner/`<owner_id>`/place__ - show certain owner's place
*  __/place__ - list of places  
	HTTP method: GET  
	Status codes: 200 - ok, 400 - bad request
*  __/place/`<place_id>`/owner__ - show owner of specific place
*  __/car__ - list of cars  
	HTTP method: GET  
	Status codes: 200 - ok, 400 - bad request
*  __/car/`<car_id>`/owner__ - show car's owner
*  __/car/`<car_id>`/plate__ - show car's plate
*  __/plate__ - list of plates  
	HTTP method: GET  
	Status codes: 200 - ok, 400 - bad request
*  __/plate/`<plate_id>`/car__ - show car which has specified plate

	Data format: 	JSON  
	Protocol:		HTTP
