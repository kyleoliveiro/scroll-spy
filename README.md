
# Scroll-spy [![Build Status](https://travis-ci.org/forsigner/scroll-spy.svg?branch=master)](https://travis-ci.org/forsigner/scroll-spy) [![NPM Version](http://img.shields.io/npm/v/scroll-spy.svg?style=flat)](https://www.npmjs.org/package/scroll-spy)

A light weight scroll spy library in vanilla js.

## Demo

[demo](http://forsigner.com/2016/03/10/fexo-doc-zh-cn/)

![spy](http://forsigner.com/images/scroll-spy/scroll-spy.png)

## Installation

#### bower

```bash
$ bower install scroll-spy --save
```

#### npm

```bash
$ npm install scroll-spy --save
```

#### Usage

```js
scrollSpy.init({
  nodeList: document.querySelectorAll('.link') // require
  activeClassName: 'active', // optional , default: active
  scrollTarget: document  // optional , default: document
});

```

**nodeList** :

- With vanilla js: `document.querySelectorAll('.toc-link')`
- With jQuery: `$('.toc-link')`


## License

  [MIT](LICENSE)
