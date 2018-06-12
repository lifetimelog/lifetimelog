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
    private currentCounter: Counter;

    constructor(
      private stateService: StateService,
      private timerService: TimerService,
      private counterService: CounterService
    ) {
      this.today = new Date();
      this.updateCurrentCounter();
    }

    private toggleTimer(timer: Timer) {
      this.updateCurrentCounter();
      if (!!this.currentCounter) {
        this.currentCounter.setEnd();
        this.counterService.save(this.currentCounter);
      }
      if (!this.currentCounter || this.currentCounter.timer !== timer) {
        this.counterService.save(new Counter({timer: timer}));
      }
      this.updateCurrentCounter();
    }

    private stopTimer() {}

    private addTimer() {
      this.timerService.save(new Timer('Neuer Timer', 'red'));
    }

    private updateCurrentCounter() {
      this.currentCounter = this.stateService.state.counters.find((counter) => !counter.getEnd());
    }
}
