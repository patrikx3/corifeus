[//]: #@corifeus-header


---

# Corifeus One - Venture

### Node Version Requirement 
``` 
>=7.8.0 
```  
   
The ```async``` and ```await``` keywords are required.

Install NodeJs:    
https://nodejs.org/en/download/package-manager/    
  
# Description


[//]: #@corifeus-header:end




# Architecture

![Corifeus Architecture](https://patrikx3.tk/files/playground/corifeus-architecture/corifeus-p3x-tdd-component.svg)

## Interoperability
* Client
  * Javascript _latest_
    * TypeScript _latest_

* Server
  * NodeJs
  * JavaScript 

* Integration
  * Joomla
  * Wordpress
  * Drupal
  
## Version control systems
* Git
  
## Documentation
* JSDoc
  
## Template
* HTML
* Angular 2
* PDF
* Handlebars

## Style
* CSS
* SASS
* LESS - more users

## Data
* MongoDB / Mongoose
* XML
* REST
  
## Development
* Skeleton
* Iterative
* Refactored
* Driven
  * Model
  * Test
    * Unit / Behavior / Should - find something simpler than Should, I just need simple asserts
    * Mocha / Karma / Protractor      
    * **Only test the required specifications, don't test everything**

## Continuous integration / build
* Grunt
* Travis
* Scrutinizer
* Docker
* WebPack
  
## Schema / Model
* Mongoose

* Uses multiple models
  * master
    * settings
  * role
  * user / role / authentication / categories / tags
  * commercial / product / order / invoice
  * erp    

## Validation
* Shared / Same for client and server

## Internationalization
* Shared / Same for client and server

## Live
[ReactiveX](http://reactivex.io/)  
[SocketIO](http://socket.io/)

## Deployment
* Server
  * core
    * commercial
      * erp     
         
* Client
  * web angular 2 / angular material
    * core - login/profile
      * commercial - product/order/invoice
        * erp - stock/warehouse

## Scenarios
  * core + api/commercial + angular/commercial + web
  * core + api/erp + angular/erp + web  
  * core + api/erp + angular/erp + cordova + ios  
  * core + api/erp + angular/erp + cordova + android  
  * server/commercial + CLI  
  * server/erp + CLI  
  * ... etc ...




[//]: #@corifeus-footer

---
[**CORIFEUS**](https://pages.corifeus.tk/corifeus) Build v1.0.1248-30

[Corifeus](http://github.com/patrikx3/corifeus) by [Patrik Laszlo](http://patrikx3.tk)
 

[//]: #@corifeus-footer:end