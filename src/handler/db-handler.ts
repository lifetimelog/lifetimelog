import * as Datastore from 'nedb';

export class DbHandler
{
  public db: Datastore;

  public timers = [
    { id: '', name: 'Hobby', color: 'orange'}
  ];
  public timestamps = [
    { date: '', idTimer: '', notice: ''}
  ];
  public environment = {
    lastSyncDate: ''
  };

  private constructor()
  {
    console.log("--- loading DB ---");
    this.db = new Datastore({ filename: 'datafile.db', autoload: true });
    /*
    this.db.insert(
      [
        { planet: 'Mars',             system: 'solar',    inhabited: false, satellites: ['Phobos', 'Deimos'] },
        { planet: 'Earth',            system: 'solar',    inhabited: true, humans: { genders: 2, eyes: true } },
        { planet: 'Jupiter',          system: 'solar',    inhabited: false },
        { planet: 'Omicron Persei 8', system: 'futurama', inhabited: true, humans: { genders: 7 } }
      ], (err, newDocs) => console.log(newDocs)
    );
    */
    this.db.find({ planet: /ar/ }, (err, docs) => console.log(docs));
  }

}
