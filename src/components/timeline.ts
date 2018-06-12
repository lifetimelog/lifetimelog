import { autoinject } from 'aurelia-framework';
import { StateService } from 'services/state-service';
import { SECOND, MINUTE, HOUR, DAY } from 'lib/constants';

@autoinject
export class TimelineCustomElement {

  private today;
  private nextHour;

  constructor(
    private stateService: StateService
  ) {
    this.today = Math.floor(Date.now() / DAY) * DAY;
    this.nextHour = Date.now() + HOUR;
  }
}
