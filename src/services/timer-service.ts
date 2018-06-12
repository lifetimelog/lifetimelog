import { Timer } from 'models/timer';
import { DataService } from 'services/data-service';

export class TimerService extends DataService {

  protected path = 'timers';

  public save(timer: Timer) {
    super.save(Object.assign(new Timer(), timer));
  }
}
