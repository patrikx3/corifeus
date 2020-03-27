[//]: #@corifeus-header

# 🎮 Corifeus Matrix

                        
[//]: #@corifeus-header:end


# Code style

## Cases we use

```camelCase = theFirstIsSmallTheRestIsCapital```  

```kabeb-case = meaning-only-lower-case-and-a-z-and-dash-and-numbers```  
  
```PascalCase = JustAlphaAndAlwaysCapitalWords``` 
  

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
camel-case-is-kebab-as-well.js

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

```js
// JavaScript 
global.corifeus.camelCase = () => console.log('camelCase');
global.corifeus.camelCase = class camelCaseClass {};
```


## Variables
``` camelCase ```  

```js
// JavaScript 
const variableIsCool = 'camelCase';
let anotherVariable = false;
var oldTypeVariable = 'cool';
```
  
## Functions
``` camelCase ```  

```js
// JavaScript 
function justSimpleFunction() {
    console.log('alsoCamelCase')
}
```

## Prototype based class

I prefer ``` camelCase ``` , though `PascalCase` is fine.

```js
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

I rarely use classes, but sometimes it is good, I prefer `camelCase` but for classes it is ok to use `PascalCase`.

``` camelCase ```

```js
// JavaScript
class simpleClass {
    constructor() {}
    
    instanceFunctionCamelCase() {}
    
    get instanceProperty() { return true; }
    set instanceProperty(value) { this._instanceProperty = value; }
    
    static classMethod() { console.log('camelCase'); }
    static get classProperty() { return 'camelCase'; }
    
}
```   

## Objects
``` camelCase ```

```js
// JavaScript 
const objects = {
    variableNow: camelCase,
    methodName: camelCase,
    nameOfTheClass: camelCase,
    staticFuncitonName: camelCase.static,
    instance: camelCase.variable            
}
```



[//]: #@corifeus-footer

---

🙏 This is an open-source project. Star this repository, if you like it, or even donate to maintain the servers and the development. Thank you so much!

Possible, this server, rarely, is down, please, hang on for 15-30 minutes and the server will be back up.

All my domains ([patrikx3.com](https://patrikx3.com) and [corifeus.com](https://corifeus.com)) could have minor errors, since I am developing in my free time. However, it is usually stable.

**Note about versioning:** Versions are cut in Major.Minor.Patch schema. Major is always the current year. Minor is either 4 (January - June) or 10 (July - December). Patch is incremental by every build. If there is a breaking change, it should be noted in the readme.


---

[**CORIFEUS**](https://pages.corifeus.com/corifeus) Build v2020.4.133

[![Donate for Corifeus / P3X](https://img.shields.io/badge/Donate-Corifeus-003087.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QZVM4V6HVZJW6)  [![Contact Corifeus / P3X](https://img.shields.io/badge/Contact-P3X-ff9900.svg)](https://www.patrikx3.com/en/front/contact) [![Like Corifeus @ Facebook](https://img.shields.io/badge/LIKE-Corifeus-3b5998.svg)](https://www.facebook.com/corifeus.software)


## P3X Sponsor

[IntelliJ - The most intelligent Java IDE](https://www.jetbrains.com/?from=patrikx3)

[![JetBrains](https://cdn.corifeus.com/assets/svg/jetbrains-logo.svg)](https://www.jetbrains.com/?from=patrikx3)




[//]: #@corifeus-footer:end
