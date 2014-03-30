### HW #3 - Resources, URIs, Operations
---
Data model:  
![Data model](https://raw.githubusercontent.com/YaroslavDev/WEB-2.0/master/Homework_3/Data_Model.png)  
URIs:  

*  __/owner__ - list of owners  
	HTTP method: GET  
	Status codes: 200 - ok, 400 - bad request  
*  __/owner/<owner_id>__ - return info about certain owner(his places and cars)  
	HTTP method: GET  
	Status codes: 200 - ok, 400 - bad request, 404 - Not found  
	HTTP method: DELETE  
	Status codes: 202 - accepted, 400 - bad request, 404 - Not found  
	HTTP method: POST  
	Status codes: 202 - accepted, 400 - bad request  
	HTTP method: PUT  
	Status codes: 200 - ok, 400 - bad request, 404 - Not found
*  __/owner/?owner_name="John"__ - list owners whose names are John
*  __/owner/<owner_id>/cars/__ - list certain owner's cars
*  __/owner/<owner_id>/place__ - show certain owner's place
*  __/place__ - list of places  
	HTTP method: GET  
	Status codes: 200 - ok, 400 - bad request
*  __/place/<place_id>/owner__ - show owner of specific place
*  __/car__ - list of cars  
	HTTP method: GET  
	Status codes: 200 - ok, 400 - bad request
*  __/car/<car_id>/owner__ - show car's owner
*  __/car/<car_id>/plate__ - show car's plate
*  __/plate__ - list of plates  
	HTTP method: GET  
	Status codes: 200 - ok, 400 - bad request
*  __/plate/<plate_id>/car__ - show car which has specified plate

All data are provided in JSON format.
