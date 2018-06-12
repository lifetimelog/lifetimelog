import { DataService } from 'services/data-service';
import { Counter } from 'models/counter';

export class CounterService extends DataService {

  protected path = 'counters';

  public save(counter: Counter) {
    console.log('___ timer started! ___');
    super.save(Object.assign(new Counter(), counter));
  }
}
