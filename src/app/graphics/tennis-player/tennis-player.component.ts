import { StmtModifier, ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { TennisPlayer } from 'src/app/Model/tennis-player';

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
  constructor() { }

  ngOnInit(): void {
  }

  public changeCible(pl: TennisPlayer) {
    this.cible = pl;
  }
  public onClick() {
    this.cible.firstName = "Jim";
    this.cible.name = "Courier";
    this.modify = !this.modify;
  }
  
  public showText() {
    return this.modify;
  }

  isSelected(pl : TennisPlayer){
    
    const result = pl == this.cible;
    return result;
    
  }
}
