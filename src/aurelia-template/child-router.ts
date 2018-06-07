import {Router, RouterConfiguration} from 'aurelia-router';

export class ChildRouter {
  public heading = 'Child Router';
  public router: Router;

  public configureRouter(config: RouterConfiguration, router: Router) {
    config.map([
      /* tslint:disable */
      { route: ['', 'welcome'], name: 'welcome',       moduleId: 'aurelia-template/welcome',       nav: true, title: 'Welcome' },
      { route: 'users',         name: 'users',         moduleId: 'aurelia-template/users',         nav: true, title: 'Github Users' },
      { route: 'child-router',  name: 'child-router',  moduleId: 'aurelia-template/child-router',  nav: true, title: 'Child Router' }
      /* tslint:enable */
    ]);

    this.router = router;
  }
}
