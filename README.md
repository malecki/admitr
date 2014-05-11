# admitr

## Automating your job.

### Background

One of the tasks of resident physicians in hospitals is _admitting patients_, which is a task of _allocating_ an incoming patient to the appropriate _team_ of other doctors and nurses for the patient's care whilst in the hospital. 

The allocation is made based on attributes of both the patient (particular needs, type of illness, etc.) and of the teams (specializations, current number of available beds, etc.). Given a configuration of _teams_ and an incoming _patient_, the admitting resident chooses the best team to handle that patient's stay in the hospital.

At the time of each admission event for a particular patient each team may be _eligible_ or _ineligible_ and the list of eligible teams is ordered based on further attributes of the team.

When a team handles an admission, it is moved to the end of the order so that given a stream of identical patients it would be the last to handle another one.

### Getting Started

I need to clean up the build and test situation, but I wanted to get this rendering in the browser quickly for prototyping.

```
browserify lib/main.js > bundle.js && python -m SimpleHTTPServer
```

### In the browser
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/malecki/admitr/master/dist/admitr.min.js
[max]: https://raw.github.com/malecki/admitr/master/dist/admitr.js

In your web page:

```html
<script src="dist/admitr.min.js"></script>
<script>
awesome(); // "awesome"
</script>
```

In your code, you can attach admitr's methods to any object.

```html
<script>
var exports = Bocoup.utils;
</script>
<script src="dist/admitr.min.js"></script>
<script>
Bocoup.utils.awesome(); // "awesome"
</script>
```

## Documentation
_(Coming soon)_

## Examples
_(Coming soon)_

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

_Also, please don't edit files in the "dist" subdirectory as they are generated via Grunt. You'll find source code in the "lib" subdirectory!_

## Release History
_(Nothing yet)_

## License
Copyright (c) 2014 malecki  
Licensed under the MIT license.
