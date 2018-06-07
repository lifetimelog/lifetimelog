import { DataService } from 'services/data-service';

export class TimerService extends DataService {

  private basePath = '';

  public remove(timer){
    // super.delete(timer);
  }

  public getNew(){}

  public getAll(){}

  public save(timer){
    if (timer.new) {
      // super.create(timer);
    } else {
      // super.update(timer);
    }
  }

}
