# deliteful-build

Build version of [ibm-js/deliteful](https://github.com/ibm-js/deliteful).

## Status

No official release yet.

## Installation

_Bower_ release installation:

    $ bower install deliteful-build

_Manual_ master installation:

    $ git clone git://github.com/ibm-js/deliteful-build.git

Then install dependencies with bower (or manually from github if you prefer to):

	$ cd deliteful-build
	$ bower install


## How to use

### `baseUrl` is the directory containing `deliteful-build`.
This is the most common use-case so the needed configuration is built in the layer.
To load the minified layer you just need to wrap your main `require` call with another `require`, requiring `"deliteful-build/layer"`.
Then you should continue to refer to modules with `"deliteful/foo"`.

For example, this code:
```js
require(["app/main", "deliteful/foo"], function() {
	...
});
```
Becomes:
```js
require(["deliteful-build/layer"], function() {
	require(["app/main", "deliteful/foo"], function() {
		...
	});
});
```

### Other `baseUrl`

If `baseUrl` is not the directory containing `deliteful-build`, custom configuration is needed.

```js
require.config({
	paths: {
		"deliteful": "path/to/deliteful-build",
		"decor": "path/to/decor-build",
		"delite": "path/to/delite-build",
		"dpointer": "path/to/dpointer-build",
		"ecma402": "path/to/ecma402-build"
	}
});
```


## Bug reporting

Issues should be filled against the source version of this project at [ibm-js/deliteful](https://github.com/ibm-js/deliteful)


## Licensing

This project is distributed by the Dojo Foundation and licensed under the ["New" BSD License](./LICENSE).
All contributions require a [Dojo Foundation CLA](http://dojofoundation.org/about/claForm).
