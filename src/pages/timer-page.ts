import { TimerService } from 'services/timer-service';
import { autoinject } from 'aurelia-framework';

import { StateHandler } from 'handler/state-handler';
// import { Timer } from 'models/timer';

@autoinject
export class TimerPage
{
    private today;

    constructor(
      private stateHandler: StateHandler,
      private timerService: TimerService
    ) {
      this.today = new Date();
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
