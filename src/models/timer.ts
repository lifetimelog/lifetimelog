export class Timer
{
  public guid;
  public name;
  public color;

  constructor(name, color)
  {
    this.guid = this.uuidv4();
    this.name = name;
    this.color = color;
  }

  private uuidv4()
  {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      let r = Math.random() * 16 | 0;
      let v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}
