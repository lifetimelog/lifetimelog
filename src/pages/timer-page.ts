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
      private configuration: Configuration
    ) {
      /*
      http.configure(config => {
        config
          .useStandardConfiguration()
          .withBaseUrl('https://api.github.com/');
      });
      */
     stateHandler.updateTimer(new Timer('blue', 'blue'));
     stateHandler.updateTimer(new Timer('blue', 'orange'));
     stateHandler.updateTimer(new Timer('blue', 'red'));
     stateHandler.updateTimer(new Timer('blue', 'green'));
    }

    private startTimer(timer)
    {
      // this.timers.push({date: new Date(), timer: timer});
    }

    private stopTimer()
    {

    }
}
