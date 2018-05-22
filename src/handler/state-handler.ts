import {autoinject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

import * as Datastore from 'nedb';

import {Timer} from 'models/timer';

@autoinject
export class StateHandler
{
  public db: Datastore;

  public timers = [];
  public timestamps = [
    { date: '', idTimer: '', notice: ''}
  ];
  public environment = {
    lastSyncDate: ''
  };

  private constructor(
    private http: HttpClient
  ) {
    /*
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('https://api.github.com/');
    });
    */

    this.db = new Datastore({ filename: 'datafile.db', autoload: true });
    /*
    this.db.insert(
      [
        { planet: 'Mars',             system: 'solar',    inhabited: false, satellites: ['Phobos', 'Deimos'] },
        { planet: 'Earth',            system: 'solar',    inhabited: true, humans: { genders: 2, eyes: true } },
        { planet: 'Jupiter',          system: 'solar',    inhabited: false },
        { planet: 'Omicron Persei 8', system: 'futurama', inhabited: true, humans: { genders: 7 } }
      ], (err, newDocs) => console.log(newDocs)
    );
    */
    // this.db.find({ planet: /ar/ }, (err, docs) => console.log(docs));
  }

  public activate ()
  {
    /*
    return this.http.fetch('users')
      .then(response => response.json())
      .then(users => this.users = users as any);
    */
    /*
    this.user = '';
    this.timers = [
      {
        timestamp: '',
        name: '',
        color: ''
      }
    ];
    */
  }

  public updateTimer(timer: Timer)
  {
    this.timers = this.timers.filter(element => element.id !== timer.guid);
    this.timers.push(timer);
  }

  public deleteTimer(timer: Timer)
  {
    this.timers = this.timers.filter(element => element.id !== timer.guid);
  }
}
