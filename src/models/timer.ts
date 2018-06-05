import { autoinject } from 'aurelia-framework';
import { StateHandler } from 'handler/state-handler';
import { DataModel } from 'models';

@autoinject
export class Timer extends DataModel
{
  public guid;
  public name;
  public color;

  constructor( name, color )
  {
    super();



    
    // this.guid = StateHandler.uuidv4();
    this.name = name;
    this.color = color;
  }

  public update()
  {

  }

  public delete()
  {

  }
}
