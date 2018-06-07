// import { HttpClient, json } from 'aurelia-fetch-client';
// import { EventAggregator } from 'aurelia-event-aggregator';
// import { autoinject } from "aurelia-framework";

// @autoinject
export class DataService {

  constructor(
    // private httpClient: HttpClient,
    // private eventAggregator: EventAggregator
  ) {}

  public save(object){
    if (object.isNew) {
      this.create(object);
    } else {
      this.update(object);
    }
  }

  public getAll(){}

  public getList() {}

  public getSingle() {}

  public getNew() {}

  public getFile() {}

  private path = '';

  private create(object){}

  private retrieve(id?, obtions?){}

  private update(object){}

  private delete(object){}

}
