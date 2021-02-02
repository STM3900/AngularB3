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
    // ici, nous avons un système mis en place pour contourner certaines erreurs
    // en effet, nous rencontrons une erreur du type NG0100: Expression has changed after it was checked
    // le problème vient du fait que nous remontons une modificaiton du modèle de l'enfant vers le parent juste après la fin de la change detection
    // cette erreur apparaît si on change de page pour revenir vers la première
    // le fait de passer par setTimeout permet de ne pas traiter immediatement la modification du joueur mais de passer par l'event loop
    // et donc de décaler la modificaiton
    // cf : https://angular.io/errors/NG0100 , vidéo vers 5 minutes => le mieux est de passer par un service pour modifier les données
    // la bonne solution est d'éviter l'output et de passer par un service
    setTimeout(() => {
      this.selectedPlayer = data;
    },0);


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
