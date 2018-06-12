import { autoinject } from 'aurelia-framework';
import { StateService } from 'services/state-service';
import { MINUTE, HOUR, DAY } from 'lib/constants';

@autoinject
export class TimelineCustomElement {

  private timezoneOffset = new Date().getTimezoneOffset();
  private today = Math.floor(Date.now() / DAY) * DAY + this.timezoneOffset * MINUTE;
  private clockInterval;
  private now = Date.now();
  private scale = 30000;
  private timelineElement;
  private markers = [];

  constructor(
    private stateService: StateService
  ) {
    this.clockInterval = setInterval(() => this.now = Date.now(), 1000);
    for (let i = 0; i <= 96; i++) {
      this.markers.push({
        time: i / 4 * HOUR,
        text: i % 4 === 0 ? ((i / 400) + '0').slice(2, 4) + ':00' : '',
        color: i % 4 === 0 ? 'black' : 'lightgrey'
      });
    }
  }

  private attached() {
    this.timelineElement.scrollLeft = DAY / this.scale;
  }

}
