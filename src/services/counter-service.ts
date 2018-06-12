import { DataService } from 'services/data-service';
import { Counter } from 'models/counter';

export class CounterService extends DataService {

  protected path = 'counters';

  public save(counter: Counter) {
    super.save(counter);
  }
}
