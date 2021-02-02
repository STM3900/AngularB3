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
      this.name = data.name;
      if (data.hasOwnProperty('firstName'))
      this.firstName = data.firstName;
      if (data.hasOwnProperty('mail'))
      this.mail = data.mail;
    }
  }

  getLongName(){
    return `${this.firstName} ${this.name}`;
  }
}
