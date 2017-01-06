import { assert }    from 'chai';

import mainEventbus  from '../../src/mainEventbus';

/* eslint-disable no-undef */

describe('Events', () =>
{
   let callbacks;

   beforeEach(() => { callbacks = {}; });

   it('set / get name', () =>
   {
      mainEventbus.setEventbusName('testname');
      assert(mainEventbus.getEventbusName() === 'testname');
   });

   it('trigger (mainEventbus)', () =>
   {
      callbacks.testTriggerCount = 0;
      mainEventbus.on('test:trigger', () => { callbacks.testTriggerCount++; });
      mainEventbus.trigger('test:trigger');
      mainEventbus.off('test:trigger');
      mainEventbus.trigger('test:trigger');
      assert(callbacks.testTriggerCount === 1);
   });
});