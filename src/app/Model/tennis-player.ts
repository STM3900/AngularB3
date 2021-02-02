export class TennisPlayer {
  public id=0;
  public name="";
  public firstName="";
  public mail="";

  constructor(data?:any){
    if (data){
      if (data.hasOwnProperty('id'))
      this.id = data.id;
      if (data.hasOwnProperty('name'))
      this.id = data.name;
      if (data.hasOwnProperty('firstName'))
      this.id = data.firstName;
      if (data.hasOwnProperty('mail'))
      this.id = data.mail;
    }
  }
}
