merge-object
============

Merge object functional

installation via npm
====================

`npm install merge-object`


## API

### merge-object(object-one, object-two)


for use
=======

```js
var merge = require('merge-object');

var A = {
	foo : 'foo'
};

var B = {
	bar : 'bar'
};

console.log(merge(A, B)); 
```

access property in object
=========================

```js
var C = merge(A, B);

console.log(C.foo);

console.log(C.bar);
```




