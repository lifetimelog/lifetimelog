import {Router, RouterConfiguration} from 'aurelia-router';
import * as CONSTANTS from 'lib/constants';

export class App
{
  public router: Router;

  public configureRouter(config: RouterConfiguration, router: Router)
  {
    config.title = CONSTANTS.apptitle;
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'aurelia-template/welcome',      nav: true, title: 'Welcome' },
      { route: 'users',         name: 'users',        moduleId: 'aurelia-template/users',        nav: true, title: 'Github Users' },
      { route: 'child-router',  name: 'child-router', moduleId: 'aurelia-template/child-router', nav: true, title: 'Child Router' },
      { route: 'timer',         name: 'timer',        moduleId: 'pages/timer-page',   nav: true, title: 'Timer' },
      { route: 'admin',         name: 'admin',        moduleId: 'pages/admin-page',        nav: true, title: 'Admin' }
    ]);

    this.router = router;
  }
}
