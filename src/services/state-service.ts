import { DAY, HOUR, MINUTE } from 'lib/constants';
import { EventAggregator } from 'aurelia-event-aggregator';

import { autoinject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';
import 'fetch';

// import * as Datastore from 'nedb';

import { Counter } from 'models/counter';
import { Timer } from 'models/timer';
import { State } from 'aurelia-route-recognizer';

interface IState {
  timers: Timer[];
  counters: Counter[];
};

@autoinject
export class StateService {

  public state: IState;
  private today = Math.floor(Date.now() / DAY) * DAY + new Date().getTimezoneOffset() * MINUTE;

  constructor(
    private httpClient: HttpClient,
    private eventAggregator: EventAggregator
  ) {
    this.state = {timers: [], counters: []};
    this.state.timers = [
      Object.assign(new Timer(), {guid: '0001', name: 'a counter', color: 'teal'}),
      Object.assign(new Timer(), {guid: '0002', name: 'a counter 2', color: 'red'}),
      Object.assign(new Timer(), {guid: '0003', name: 'a counter 3', color: 'blue'}),
      Object.assign(new Timer(), {guid: '0004', name: 'a counter 4', color: 'green'})
    ];

    this.state.counters = [
      new Counter({
        timer: this.state.timers[0],
        start: this.today + 7 * HOUR + 15 * MINUTE,
        end: this.today + 7 * HOUR + 45 * MINUTE,
        notice: 'some note'}),
      new Counter({
        timer: this.state.timers[1],
        start: this.today + 9 * HOUR,
        end: this.today + 11 * HOUR,
        notice: 'some note'}),
      new Counter({
        timer: this.state.timers[2],
        start: this.today + 11 * HOUR,
        end: this.today + 11 * HOUR + 15 * MINUTE,
        notice: 'some note'}),
      new Counter({
        timer: this.state.timers[3],
        start: this.today + 11 * HOUR + 15 * MINUTE,
        end: this.today + 11 * HOUR + 45 * MINUTE,
        notice: 'some note'})
    ];
  }

  // public db: Datastore;

  // public environment = {
  //   lastSyncDate: ''
  // };

  

  // private constructor(
  //   // private http: HttpClient
  // ) {
  //   /*
  //   http.configure(config => {
  //     config
  //       .useStandardConfiguration()
  //       .withBaseUrl('https://api.github.com/');
  //   });
  //   */

  //   // this.db = new Datastore({ filename: 'datafile.db', autoload: true });
  //   /*
  //   this.db.insert(
  //     [
  //       { planet: 'Mars',             system: 'solar',    inhabited: false, satellites: ['Phobos', 'Deimos'] },
  //       { planet: 'Earth',            system: 'solar',    inhabited: true, humans: { genders: 2, eyes: true } },
  //       { planet: 'Jupiter',          system: 'solar',    inhabited: false },
  //       { planet: 'Omicron Persei 8', system: 'futurama', inhabited: true, humans: { genders: 7 } }
  //     ], (err, newDocs) => console.log(newDocs)
  //   );
  //   */
  //   // this.db.find({ planet: /ar/ }, (err, docs) => console.log(docs));
  // }

  // public activate ()
  // {
  //   /*
  //   return this.http.fetch('users')
  //     .then(response => response.json())
  //     .then(users => this.users = users as any);
  //   */
  //   /*
  //   this.user = '';
  //   this.timers = [
  //     {
  //       timestamp: '',
  //       name: '',
  //       color: ''
  //     }
  //   ];
  //   */
  // }
}
