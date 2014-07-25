require.config({
	"packages": [
		{
			"name": "deliteful",
			"location": "deliteful-build"
		},
		{
			"name": "decor",
			"location": "decor-build"
		},
		{
			"name": "delite",
			"location": "delite-build"
		},
		{
			"name": "dpointer",
			"location": "dpointer-build"
		},
		{
			"name": "ecma402",
			"location": "ecma402-build"
		}
	]
});
define(["deliteful/layer","decor/boot","delite/boot","dpointer/boot","ecma402/boot"], function(){});