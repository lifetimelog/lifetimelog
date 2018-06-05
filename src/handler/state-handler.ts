
import { autoinject } from 'aurelia-framework';
// import { HttpClient } from 'aurelia-fetch-client';
import 'fetch';

// import * as Datastore from 'nedb';

import { Counter } from 'models';
import { Timer } from 'models';

interface IState
{
  timers: Timer[];
  counters: Counter[];
};

@autoinject
export class StateHandler
{
  public static getInstance()
  {
    if (!StateHandler.instance)
    {
      StateHandler.instance = new StateHandler();
    }
  }

  private static instance: StateHandler;

  private state: IState = {
    timers: [],
    counters: []
  };

  private constructor()
  {}

  public updateTimer(timer: Timer)
  {
    this.state.timers = this.state.timers.filter(element => element.guid !== timer.guid);
    this.state.timers.push(timer);
  }

  public deleteTimer(timer: Timer)
  {
    this.state.timers = this.state.timers.filter(element => element.guid !== timer.guid);
  }

  public updateCounter(counter: Counter)
  {
    this.state.counters = this.state.counters.filter(element => element.guid !== counter.guid);
    this.state.counters.push(counter);
  }

  public deleteCounter(counter: Counter)
  {
    this.state.counters = this.state.counters.filter(element => element.guid !== counter.guid);
  }

  public uuidv4(): String
  {
    let guid;
    do
    {
      guid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        let r = Math.random() * 16 | 0;
        let v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    } while (Object.keys(this.state).some(key => this.state[key].find(element => element.guid === guid)));
    return guid;
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
