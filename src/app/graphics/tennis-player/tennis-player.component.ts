import { HttpClient, HttpHandler } from '@angular/common/http';
import { StmtModifier, ThrowStmt } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TennisPlayer } from 'src/app/Model/tennis-player';
import { TennisPlayerService } from 'src/app/services/tennis-player.service';

@Component({
  selector: 'app-tennis-player',
  templateUrl: './tennis-player.component.html',
  styleUrls: ['./tennis-player.component.scss']
})
export class TennisPlayerComponent implements OnInit {
  
  public playersList:TennisPlayer[];
  public cible : TennisPlayer;
  modify = false;

  @Output() selectionChanged = new EventEmitter<TennisPlayer>();

  // constructeurs et initialiseurs
  constructor(private _tplayerService:TennisPlayerService) { 
    
  }

  ngOnInit(): void {
    this.cible = this._tplayerService.getAllPlayer()[0];
    // même tableau partagé
    this.playersList = this._tplayerService.getAllPlayer();
  }

  public changeCible(pl: TennisPlayer) {
    this.cible = pl;
    this.selectionChanged.emit(pl);
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
