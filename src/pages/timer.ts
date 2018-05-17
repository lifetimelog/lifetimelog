import {DbHandler} from 'handler/db-handler';

class Timer
{
    private today = new Date();
    private timers = [];

    private startTimer(timer)
    {
      this.timers.push({date: new Date(), timer: timer});
    }

    private stopTimer()
    {

    }
}
