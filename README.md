<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![MIT License][license-shield]][license-url]

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#documentation">Documentation</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

An request library adapter to accomodate multiple request libraries

A list of commonly used resources that I find helpful are listed in the acknowledgements.


### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Install NPM packages
   ```sh
   npm i api-request-adapter
   ```

<!-- USAGE EXAMPLES -->
## Usage

```JS
const { Request, FetchAdapter, AxiosAdapter } = require("./index");

const runAxios = async () => {
    const request = new Request(new AxiosAdapter());
    let response = await request.get("https://jsonplaceholder.typicode.com/todos/1");
    console.log("Axios: ", response);
}

const runFetch = async () => {
    const request = new Request(new FetchAdapter());
    let response = await request.get("https://jsonplaceholder.typicode.com/todos/1");
    console.log("Fetch: ", response); 
}

const run = async () => {
    await runAxios();
    await runFetch();
}

run();
```

## Documentation

## Classes

<dl>
<dt><a href="#FetchAdapter">FetchAdapter</a></dt>
<dd></dd>
<dt><a href="#AxiosAdapter">AxiosAdapter</a></dt>
<dd></dd>
<dt><a href="#Request">Request</a></dt>
<dd></dd>
</dl>

<a name="FetchAdapter"></a>

## FetchAdapter
**Kind**: global class  
<a name="new_FetchAdapter_new"></a>

### new FetchAdapter(token, fetchLibrary)
Instantiate the Fetch Adapter


| Param | Type | Description |
| --- | --- | --- |
| token | <code>String</code> | (Optional) Bearer Token |
| fetchLibrary | <code>Object</code> | (Optional) pass in the fetch object if using on browser |

<a name="AxiosAdapter"></a>

## AxiosAdapter
**Kind**: global class  
<a name="new_AxiosAdapter_new"></a>

### new AxiosAdapter(token)
Instantiate The Axios Adapter


| Param | Type | Description |
| --- | --- | --- |
| token | <code>string</code> | bearer token |

<a name="Request"></a>

## Request
**Kind**: global class  

* [Request](#Request)
    * [new Request(adapter)](#new_Request_new)
    * [.get(url, queryParameters)](#Request+get) ⇒ <code>Promise</code>
    * [.delete(url, queryParameters, body)](#Request+delete) ⇒ <code>Promise</code>
    * [.post(url, queryParameters, body)](#Request+post) ⇒ <code>Promise</code>
    * [.put(url, queryParameters, body)](#Request+put) ⇒ <code>Promise</code>
    * [.patch(url, queryParameters, body)](#Request+patch) ⇒ <code>Promise</code>

<a name="new_Request_new"></a>

### new Request(adapter)
Instantiate the request library


| Param | Type | Description |
| --- | --- | --- |
| adapter | <code>Object</code> | FetchAdapter or AxiosAdapter object expected |

<a name="Request+get"></a>

### request.get(url, queryParameters) ⇒ <code>Promise</code>
GET HTTP request

**Kind**: instance method of [<code>Request</code>](#Request)  
**Returns**: <code>Promise</code> - resolves into the JSON object of given request  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> |  |
| queryParameters | <code>object</code> | key, pair which includes query parameter |

<a name="Request+delete"></a>

### request.delete(url, queryParameters, body) ⇒ <code>Promise</code>
DELETE HTTP request

**Kind**: instance method of [<code>Request</code>](#Request)  
**Returns**: <code>Promise</code> - resolves into the JSON object of given request  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> |  |
| queryParameters | <code>object</code> | key, pair which includes query parameter |
| body | <code>object</code> | key, pair which will be the request json bodyr |

<a name="Request+post"></a>

### request.post(url, queryParameters, body) ⇒ <code>Promise</code>
POST HTTP request

**Kind**: instance method of [<code>Request</code>](#Request)  
**Returns**: <code>Promise</code> - resolves into the JSON object of given request  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> |  |
| queryParameters | <code>object</code> | key, pair which includes query parameter |
| body | <code>object</code> | key, pair which will be the request json bodyr |

<a name="Request+put"></a>

### request.put(url, queryParameters, body) ⇒ <code>Promise</code>
PUT HTTP request

**Kind**: instance method of [<code>Request</code>](#Request)  
**Returns**: <code>Promise</code> - resolves into the JSON object of given request  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> |  |
| queryParameters | <code>object</code> | key, pair which includes query parameter |
| body | <code>object</code> | key, pair which will be the request json bodyr |

<a name="Request+patch"></a>

### request.patch(url, queryParameters, body) ⇒ <code>Promise</code>
PATCH HTTP request

**Kind**: instance method of [<code>Request</code>](#Request)  
**Returns**: <code>Promise</code> - resolves into the JSON object of given request  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> |  |
| queryParameters | <code>object</code> | key, pair which includes query parameter |
| body | <code>object</code> | key, pair which will be the request json body |



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.


<!-- CONTACT -->
## Contact

Ritwik Mukherjee - [@idrit](https://twitter.com/idrit) - mritwik369@gmail.com


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt