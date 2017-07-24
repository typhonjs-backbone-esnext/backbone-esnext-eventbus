![backbone-esnext-eventbus](https://i.imgur.com/4OdT8Ax.png)

[![NPM](https://img.shields.io/npm/v/backbone-esnext-eventbus.svg?label=npm)](https://www.npmjs.com/package/backbone-esnext-eventbus)
[![Documentation](http://docs.typhonjs.io/typhonjs-backbone-esnext/backbone-esnext-eventbus/badge.svg)](http://docs.typhonjs.io/typhonjs-backbone-esnext/backbone-esnext-eventbus/)
[![Code Style](https://img.shields.io/badge/code%20style-allman-yellowgreen.svg?style=flat)](https://en.wikipedia.org/wiki/Indent_style#Allman_style)
[![License](https://img.shields.io/badge/license-MPLv2-yellowgreen.svg?style=flat)](https://github.com/typhonjs-backbone/typhonjs-core-backbone-events/blob/master/LICENSE)
[![Gitter](https://img.shields.io/gitter/room/typhonjs/TyphonJS.svg)](https://gitter.im/typhonjs/TyphonJS)

[![Build Status](https://travis-ci.org/typhonjs-backbone-esnext/backbone-esnext-eventbus.svg)](https://travis-ci.org/typhonjs-backbone-esnext/backbone-esnext-eventbus)
[![Coverage](https://img.shields.io/codecov/c/github/typhonjs-backbone-esnext/backbone-esnext-eventbus.svg)](https://codecov.io/github/typhonjs-backbone-esnext/backbone-esnext-eventbus)
[![Dependency Status](https://david-dm.org/typhonjs-backbone-esnext/backbone-esnext-eventbus.svg)](https://david-dm.org/typhonjs-backbone-esnext/backbone-esnext-eventbus)

For essential information pertaining to backbone-esnext please refer to [backbone-esnext](https://github.com/typhonjs-backbone-esnext/backbone-esnext) and the main [issues forum](https://github.com/typhonjs-backbone-esnext/backbone-esnext/issues).

`backbone-esnext-eventbus` provides a default instance of [backbone-esnext-events](https://www.npmjs.com/package/backbone-esnext-events) which may serve as a main eventbus. Please refer to backbone-esnext-events for detailed documentation. The main impetus for a default main eventbus being easily imported across modules is to facilitate message passing between modules versus direct dependencies / method invocation. 

It should be noted that this module only depends on backbone-esnext-events which has no other dependencies. 

An example follows:
```
import mainEventbus from 'backbone-esnext-eventbus';

mainEventbus.on('fire:test', () => { console.log('Test Fired!'); return 42; }

mainEventbus.trigger('fire:test');  // Prints 'Test Fired'!

const value = mainEventbus.triggerSync('fire:test');  // Prints 'Test Fired' and returns '42'!

assert(value === 42);

```

and in an entirely separate module / source file:

```
import mainEventbus from 'backbone-esnext-eventbus';

const value = mainEventbus.triggerSync('fire:test');  // Prints 'Test Fired' and returns '42'!

assert(value === 42);

```

There are also four other alternate eventbus instances provided as named exports: `auxEventbus`, `backboneEventbus`, `pluginEventbus` and `testEventbus`. 

These can be imported as follows:

```
import { auxEventbus }      from 'backbone-esnext-eventbus';
import { backboneEventbus } from 'backbone-esnext-eventbus';
import { pluginEventbus }   from 'backbone-esnext-eventbus';
import { testEventbus }     from 'backbone-esnext-eventbus';
```
