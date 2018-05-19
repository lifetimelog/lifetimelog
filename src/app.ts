import {Router, RouterConfiguration} from 'aurelia-router';
import * as CONSTANTS from 'lib/constants';

export class App
{
  public router: Router;

  public configureRouter(config: RouterConfiguration, router: Router)
  {
    config.title = CONSTANTS.apptitle;
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'pages/welcome',      nav: true, title: 'Welcome' },
      { route: 'users',         name: 'users',        moduleId: 'pages/users',        nav: true, title: 'Github Users' },
      { route: 'child-router',  name: 'child-router', moduleId: 'pages/child-router', nav: true, title: 'Child Router' },
      { route: 'timer',         name: 'timer',        moduleId: 'pages/timer',        nav: true, title: 'Timer' },
      { route: 'admin',         name: 'admin',        moduleId: 'pages/admin',        nav: true, title: 'Admin' }
    ]);

    this.router = router;
  }
}
