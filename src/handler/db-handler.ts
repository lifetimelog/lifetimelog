import {noView} from 'aurelia-framework';

@noView
export class DbHandler
{
  public instance: DbHandler;

  private constructor()
  {
    this.instance = new DbHandler();
  }

  public getInstance()
  {
    return this.instance;
  }
}
