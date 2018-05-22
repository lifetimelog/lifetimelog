import {autoinject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

import { DbHandler } from 'handler/db-handler';

@autoinject
export class Admin
{
  /*
  public heading = 'Github Users';
  public users = [];
  */
 public user;
 public timers;

  constructor(
    private http: HttpClient,
    private dbHandler: DbHandler
  ) {
    /*
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('https://api.github.com/');
    });
    */
  }

  public activate()
  {
    /*
    return this.http.fetch('users')
      .then(response => response.json())
      .then(users => this.users = users as any);
      */
    this.user = '';
    this.timers = [
      {
        timestamp: '',
        name: '',
        color: ''
      }
    ];

  }
}
