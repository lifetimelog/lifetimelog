import { DataService } from 'services/data-service';

export class GuidService extends DataService
{
  public static instance

  public static getInstance() {
    // return this.instance ? this.instance : this.instance = new GuidService();
  }

  public getNew(){}
}
