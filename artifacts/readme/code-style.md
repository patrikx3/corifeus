[//]: #@corifeus-header

## Corifeus Matrix

---
                        
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

[**CORIFEUS**](https://pages.corifeus.com/corifeus) Build v1.0.1302-332

[Corifeus](http://www.corifeus.com) by [Patrik Laszlo](http://patrikx3.com)

[//]: #@corifeus-footer:end