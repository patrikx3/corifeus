[//]: #@corifeus-header

 [![Build Status](https://travis-ci.org/patrikx3/corifeus.svg?branch=master)](https://travis-ci.org/patrikx3/corifeus)  [![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/patrikx3/corifeus/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/patrikx3/corifeus/?branch=master)  [![Code Coverage](https://scrutinizer-ci.com/g/patrikx3/corifeus/badges/coverage.png?b=master)](https://scrutinizer-ci.com/g/patrikx3/corifeus/?branch=master)  
---
# Corifeus Matrix

## Issues / Support
This is an open source project. Time is a precious thing, so I have no time to give support and fix issues for someone else. I fix a bug, when I have an error that I need. If you got an issue, error or bug, I hope someone will have time to do it for you, otherwise, you are on you own.

Though, if I know the solution, I will tell you.

If you want to extend, fix bugs and add in new features on your own time, I help you , as ```patrikx3``` is an orgnization. I can add in anyone in no time. Not forking, you become a member, do not even need a pull merge request.

### Node Version Requirement 
``` 
>=7.8.0 
```  
   
### Built on Node 
``` 
v7.10.0
```   
   
The ```async``` and ```await``` keywords are required.

Install NodeJs:    
https://nodejs.org/en/download/package-manager/    
  
# Description  

                        
[//]: #@corifeus-header:end


# Code style

```kabeb-case = meaning-only-lower-case-and-a-z-and-dash-and-numbers```  
  
```PascalCase = JustAlphaAndAlwaysCapitalWords``` 
  
```camelCase = theFirstIsSmallTheRestIsCapital```  

## CSS Prefix
``` kabeb-case ```  

**Prefix so that get away form namespace clashes.**  
  
```.cory = corifeus```

```css
.cory-something { font-family: "Corifeus"; }
```

## HTML Prefix
``` kabeb-case ```  

**Prefix so that get away form namespace clashes.** It is both for tags and attributes.  
  
``cory = corifeus``

```html
<cory-element cory-attribute="kabeb-case" class="cory-something"/>
```

## Url
``` kabeb-case ```  

```bash
https://localhost/very-long-sentance/is/just/kebab-case.html
```

## Path
``` kabeb-case ```  

```bash
/module-one/love/live/path.js

/try/code-style/by/class.js
```

## Filename
``` kabeb-case ```   


```bash
// function
camel-case.js

// class
pascal-case-is-kebab-as-well.js

// html file
kabeb-case.html

// regular file
kebab-case.any
kabeb-case.js
kabeb-case.pdf
kabeb-case.html
kabeb-case.css
```

## Namespace
 
``` camelCase ```  

The namespace = ```corifeus```  

```javascript
// JavaScript 
global.corifeus.camelCase = () => console.log('camelCase');
global.corifeus.camelCase = class camelCaseClass {};
```


## Variables
``` camelCase ```  

```javascript
// JavaScript 
const variableIsCool = 'camelCase';
let anotherVariable = false;
var oldTypeVariable = 'cool';
```
  
## Functions
``` camelCase ```  

```javascript
// JavaScript 
function justSimpleFunction() {
    console.log('alsoCamelCase')
}
```

## Prototype based class

``` camelCase ```

```javascript
// JavaScript
function prototypeBasedClass() {
    console.log('likeAClassIsCamelCase');
}

prototypeBasedClass.staticFunction = function() {}

prototypeBasedClass.staticVariable = true;

prototypeBasedClass.prototype.instanceFunction = function() {} 

prototypeBasedClass.prototype.instanceVariable = true; 
```

## Classes
``` camelCase ```

```javascript
// JavaScript
class simpleClass {
    constructor() {}
    
    instanceFunctionCamelCase() {}
    
    get instanceProperty() { return true; }
    set instanceProperty(value) { this._instanceProperty = value; }
    
    static classMethod() { console.log('PascalCase'); }
    static get classProperty() { return 'PascalCase'; }
    
}
```   

## Objects
``` camelCase ```

```javascript
// JavaScript 
const objects = {
    variableNow: camelCase,
    methodName: camelCase,
    NameOfTheClass: PascalCase,
    staticFuncitonName: camelCase.static,
    instance: camelCase.variable            
}
```



[//]: #@corifeus-footer

---
[**CORIFEUS**](https://pages.corifeus.tk/corifeus) Build v1.0.1255-100

[Corifeus](http://www.corifeus.tk) by [Patrik Laszlo](http://patrikx3.tk)

[//]: #@corifeus-footer:end