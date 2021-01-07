import { HttpClient, HttpHandler } from '@angular/common/http';
import { StmtModifier, ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { TennisPlayer } from 'src/app/Model/tennis-player';
import { TennisPlayerService } from 'src/app/services/tennis-player.service';

@Component({
  selector: 'app-tennis-player',
  templateUrl: './tennis-player.component.html',
  styleUrls: ['./tennis-player.component.scss']
})
export class TennisPlayerComponent implements OnInit {
  public playersList: TennisPlayer[] = [
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
    }
  ];

  public cible = this.playersList[1];
  modify = false;

  // constructeurs et initialiseurs
  constructor(private _tplayerService:TennisPlayerService) { 
    
  }

  ngOnInit(): void {

  }

  public changeCible(pl: TennisPlayer) {
    this.cible = pl;
    this.cible.name=this._tplayerService.nom;
  }
  public onClick() {
    this.cible.firstName = "Jim";
    this.cible.name = "Courier";
    this.modify = !this.modify;

    this._tplayerService.nom='je clique';
  }
  
  public showText() {
    return this.modify;
  }

  isSelected(pl : TennisPlayer){
    
    const result = pl == this.cible;
    return result;
    
  }
}
