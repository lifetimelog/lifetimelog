import { EventAggregator } from 'aurelia-event-aggregator';
import { autoinject } from 'aurelia-framework';

import { StateHandler } from 'handler/state-handler';
import { Configuration } from 'lib/configuration';
import { Timer } from 'models/timer';

@autoinject
export class TimerPage
{
    private today = new Date();

    constructor(
      private stateHandler: StateHandler,
      private configuration: Configuration,
      private eventAggregator: EventAggregator
    ) {
      this.eventAggregator.subscribe('myEvent', (event) => {
        console.log(event);
      });
      this.eventAggregator.publish('myEvent', 'myData');
    //  console.log(new Timer('blue', 'blue'));
    //  console.log(new Timer('orange', 'orange'));
    //  console.log(new Timer('red', 'red'));
    //  console.log(new Timer('green', 'green'));
    }

    private startTimer(timer)
    {
      // this.timers.push({date: new Date(), timer: timer});
    }

    private stopTimer()
    {

    }

    private addTimer()
    {

    }
}
