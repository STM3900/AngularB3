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
export class TennisPlayerComponent  {
  
  constructor(private _tplayerService: TennisPlayerService){}
  public selectedPlayer: TennisPlayer;

  public isEditing=false;

  onSelectionChanged(data:TennisPlayer){
    this.selectedPlayer = data;
  }

  onUpdate(){
    this.isEditing = true;
  }
  onAdd(){
    this.selectedPlayer = new TennisPlayer();
    this.isEditing = true;
  }
  formDone(){
    this.isEditing=false;
    this.onSelectionChanged(this._tplayerService.selectedPlayer);
  }
}
