import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TennisPlayer } from '../Model/tennis-player';

@Injectable({
  providedIn: 'root'
})
export class TennisPlayerService {
  private playersList: TennisPlayer[] = [
    {
      id: 1,
      name: 'Jim',
      firstName: 'JIIIM',
      mail:''
    }
    ,
    {
      id: 2,
      name: 'Pete',
      firstName: 'PEEETE',
      mail:''
    }, {
      id: 3,
      name: 'Pat',
      firstName: 'PAAAT',
      mail:''
    }, {
      id: 4,
      name: 'Stephan',
      firstName: 'STEPHAAAN',
      mail:''
    },
    {
      id: 5,
      name: 'Rapha',
      firstName: 'Nadal',
      mail:''
    }
  ];

  public selectedPlayer:TennisPlayer;
  public nom="Titi";
  constructor(private _http: HttpClient) { 
    if (this.playersList && this.playersList.length){
      this.selectedPlayer = this.playersList[0];
    }
      
  }

  getAllPlayer(){
    
    return this.playersList;
  }
  selectPlayer(pl: TennisPlayer) {
    this.selectedPlayer = pl;
  }

  UpdatePlayer(player: TennisPlayer) {
    
    if (player.id==0){
      player.id=Math.max(0, ...this.playersList.map(pl=>pl.id))+1;
      this.playersList.push(player);
    }else{
      const playerIndex = this.playersList.findIndex(pl=>pl.id == player.id);
      this.playersList[playerIndex]=player;
    }
  }


}
