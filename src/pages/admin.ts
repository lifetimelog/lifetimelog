import {autoinject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@autoinject
export class Admin
{
  /*
  public heading = 'Github Users';
  public users = [];
  */
 public user;
 public timers;

  constructor(private http: HttpClient)
  {
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
