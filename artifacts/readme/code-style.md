[//]: #@corifeus-header

# 🎮 Corifeus Matrix

                        
[//]: #@corifeus-header:end


# Code style

## Cases we use

```camelCase = theFirstIsSmallTheRestIsCapital```  

```kebab-case = meaning-only-lower-case-and-a-z-and-dash-and-numbers```  
  
```PascalCase = JustAlphaAndAlwaysCapitalWords``` 
  

## CSS Prefix
``` kebab-case ```  

**Prefix so that get away form namespace clashes.**  
  
```.cory = corifeus```

```css
.cory-something { font-family: "Corifeus"; }
```

## HTML Prefix
``` kebab-case ```  

**Prefix so that get away form namespace clashes.** It is both for tags and attributes.  
  
``cory = corifeus``

```html
<cory-element cory-attribute="kebab-case" class="cory-something"/>
```

## Url
``` kebab-case ```  

```bash
https://localhost/very-long-sentance/is/just/kebab-case.html
```

## Path
``` kebab-case ```  

```bash
/module-one/love/live/path.js

/try/code-style/by/class.js
```

## Filename
``` kebab-case ```   


```bash
// function
camel-case.js

// class
camel-case-is-kebab-as-well.js

// html file
kebab-case.html

// regular file
kebab-case.any
kebab-case.js
kebab-case.pdf
kebab-case.html
kebab-case.css
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

# Corifeus Network

AI-powered network & email toolkit — free, no signup.

**Web** · [network.corifeus.com](https://network.corifeus.com)  **MCP** · [`npm i -g p3x-network-mcp`](https://www.npmjs.com/package/p3x-network-mcp)

- **AI Network Assistant** — ask in plain language, get a full domain health report
- **Network Audit** — DNS, SSL, security headers, DNSBL, BGP, IPv6, geolocation in one call
- **Diagnostics** — DNS lookup & global propagation, WHOIS, reverse DNS, HTTP check, my-IP
- **Mail Tester** — live SPF/DKIM/DMARC + spam score + AI fix suggestions, results emailed (localized)
- **Monitoring** — TCP / HTTP / Ping with alerts and public status pages
- **MCP server** — 17 tools exposed to Claude Code, Codex, Cursor, any MCP client
- **Install** — `claude mcp add p3x-network -- npx p3x-network-mcp`
- **Try** — *"audit example.com"*, *"why do my emails land in spam? test me@example.com"*
- **Source** — [patrikx3/network](https://github.com/patrikx3/network) · [patrikx3/network-mcp](https://github.com/patrikx3/network-mcp)
- **Contact** — [patrikx3.com](https://www.patrikx3.com/en/front/contact) · [donate](https://paypal.me/patrikx3)

---

## ❤️ Support Our Open-Source Project  
If you appreciate our work, consider ⭐ starring this repository or 💰 making a donation to support server maintenance and ongoing development. Your support means the world to us—thank you!  

---

### 🌍 About My Domains  
All my domains, including [patrikx3.com](https://patrikx3.com), [corifeus.eu](https://corifeus.eu), and [corifeus.com](https://corifeus.com), are developed in my spare time. While you may encounter minor errors, the sites are generally stable and fully functional.  

---

### 📈 Versioning Policy  
**Version Structure:** We follow a **Major.Minor.Patch** versioning scheme:  
- **Major:** 📅 Corresponds to the current year.  
- **Minor:** 🌓 Set as 4 for releases from January to June, and 10 for July to December.  
- **Patch:** 🔧 Incremental, updated with each build.  

**🚨 Important Changes:** Any breaking changes are prominently noted in the readme to keep you informed.


[**CORIFEUS**](https://corifeus.com/matrix) Build v2026.4.117

 [![Donate for PatrikX3 / P3X](https://img.shields.io/badge/Donate-PatrikX3-003087.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QZVM4V6HVZJW6)  [![Contact Corifeus / P3X](https://img.shields.io/badge/Contact-P3X-ff9900.svg)](https://www.patrikx3.com/en/front/contact) [![Like Corifeus @ Facebook](https://img.shields.io/badge/LIKE-Corifeus-3b5998.svg)](https://www.facebook.com/corifeus.software)





[//]: #@corifeus-footer:end
