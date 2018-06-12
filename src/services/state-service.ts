import { MINUTE } from 'lib/constants';
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
        start: Date.now() - 80 * MINUTE,
        end: Date.now() - 60 * MINUTE,
        notice: 'some note'}),
      new Counter({
        timer: this.state.timers[1],
        start: Date.now() - 60 * MINUTE,
        end: Date.now() - 40 * MINUTE,
        notice: 'some note'}),
      new Counter({
        timer: this.state.timers[2],
        start: Date.now() - 40 * MINUTE,
        end: Date.now() - 20 * MINUTE,
        notice: 'some note'}),
      new Counter({
        timer: this.state.timers[3],
        start: Date.now() - 20 * MINUTE,
        end: Date.now(),
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
