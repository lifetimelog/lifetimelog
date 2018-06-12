import { DataModel } from 'models/data-model';

export class Timer extends DataModel {

  public color;
  public name;

  constructor(name?: String, color?: String) {
    super();
    this.name = name || 'Timer';
    this.color = color || 'lightgrey';
  }
}
