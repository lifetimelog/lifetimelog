import { StateService } from 'services/state-service';
// import { HttpClient, json } from 'aurelia-fetch-client';
// import { EventAggregator } from 'aurelia-event-aggregator';
import { autoinject } from 'aurelia-framework';

@autoinject
export class DataService {

  protected path = '';

  constructor(
    private stateService: StateService
  ) {}

  protected save(object) {
    if (this.stateService.state[this.path].find(element => object.guid && element.guid === object.guid)) {
      this.update(object);
    } else {
      object.guid = this.newGuid();
      this.create(object);
    }
  }

  // public getAll(){}

  // public getList() {}

  // public getSingle() {}

  // public getFile() {}

  // private retrieve(id?, obtions?) {}

  private update(object) {
    this.stateService.state[this.path] = this.stateService.state[this.path].filter(element => element.guid !== object.guid);
    this.stateService.state[this.path].push(object);
  }

  private create(object) {
    this.stateService.state[this.path].push(object);
  }

  // private delete(object) {
  //   this[this.path] = this[this.path].filter(element => element.guid !== object.guid);
  // }

  private newGuid() {
    let guid;
    // check for ressource: Server -> Cache (State) -> local Database
    do {
      guid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        let r = Math.random() * 16 | 0;
        let v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    } while (Object.keys(this.stateService.state).some(key => this.stateService.state[key].find(element => element.guid === guid)));
    return guid;
  }
}
