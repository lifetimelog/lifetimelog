import { LanguageEn } from 'lib/language-en';
import { LanguageDe } from 'lib/language-de';

export class Configuration
{
  public startOfToday: Date;
  public language;

  constructor()
  {
    this.startOfToday  = new Date();
    this.setStartOfToday(5, 0);
    this.setLanguage('de');
  }

  public setStartOfToday(hour, minute)
  {
    this.startOfToday.setUTCHours(hour, minute, 0, 0);
    console.log(this.startOfToday);
  }

  public setLanguage(lang)
  {
    switch(lang)
    {
      case 'de':
        this.language = new LanguageDe();
        break;
      default:
        this.language = new LanguageEn();
        break;
    }
    
  }
}
