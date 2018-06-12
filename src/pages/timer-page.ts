import { Counter } from 'models/counter';
import { CounterService } from 'services/counter-service';
import { StateService } from 'services/state-service';
import { TimerService } from 'services/timer-service';

import { Timer } from 'models/timer';

import { autoinject } from 'aurelia-framework';

// import { StateService } from 'services/state-service';
// import { Timer } from 'models/timer';

@autoinject
export class TimerPage
{
    private today;

    constructor(
      private stateService: StateService,
      private timerService: TimerService,
      private counterService: CounterService
    ) {
      this.today = new Date();
    }

    private startTimer(timer: Timer) {
      // this.counterService.save(new Counter({timer: timer}));
    }

    private stopTimer() {}

    private addTimer() {
      this.timerService.save(new Timer('Neuer Timer', 'red'));
    }
}
