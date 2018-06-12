import { DataModel } from 'models/data-model';
import { Timer } from 'models/timer';
import { autoinject } from 'aurelia-framework';

export class Counter extends DataModel {

  public notice;
  public timer: Timer;

  private end;
  private planned;
  private start;

  constructor(options?) {
    super();
    // ToDo: only counterService should create new Counters to make shure counters don't overlap or run simultaneous

    // ToDo: check that this timeslot isn't already taken by another counter
    // ToDo: if this is not the last timer and no end is defined, this.end = Math.ceil(this.start / (15 * 60 * 1000)) * (15 * 60 * 1000);
    // ToDo: if a counter is still running and this is the new last timer, end the one still running
    this.timer = options.timer || new Timer();
    this.start = options.start || Date.now();
    this.end = options.end;
    // if (!options.end) { // it is optional to make a counter planned ...
    //   this.planned = options.planned || Math.ceil(this.start / (15 * 60 * 1000)) * (15 * 60 * 1000);
    // }
    this.notice = options.notice || '';
  }

  public getStart() { return this.start; }
  public setStart(start: number) {
    if (this.end && start > this.end) {
      this.start = this.end;
      return;
    }
    if (start > Date.now()) {
      this.start = Date.now();
      return;
    }
    let previousCounter = this.getPreviousCounter();
    if (previousCounter && start < previousCounter.getEnd()) {
      this.start = previousCounter.getEnd();
      return;
    }
    this.start = start;
  }

  public getPlanned() { return this.planned; }
  public setPlanned(planned: number) {
    if (this.end) {
      return;
    }
    // check if planned > start
    this.planned = planned;
  }

  public getEnd() { return this.end; }
  public setEnd(end?: number) {
    this.planned = undefined;
    if (!end) {
      if (!this.end) {
        this.end = Date.now();
      }
      return;
    }
    if (end < this.start) {
      this.end = this.start;
      return;
    }
    if (end > Date.now()) {
      this.end = Date.now();
      return;
    }
    let nextCounter = this.getNextCounter();
    if (nextCounter && end > nextCounter.getStart()) {
      this.end = nextCounter.getStart();
      return;
    }
    this.end = end;
  }

  public split(time) {
    let copy = Object.assign(new Counter(), JSON.parse(JSON.stringify(this)));
    this.setEnd(time);
    copy.setStart(time);
    // ToDo: save copy to state
    return copy;
  }

  public getPreviousCounter(): Counter {
    return new Counter();
  }

  public getNextCounter(): Counter {
    return new Counter();
  }

  // ToDo: event to check if Date.now() >= this.planned to setEnd(this.planned)

}
