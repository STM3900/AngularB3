import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TennisPlayer } from 'src/app/Model/tennis-player';
import { TennisPlayerService } from 'src/app/services/tennis-player.service';

@Component({
  selector: 'app-tennis-player-list',
  templateUrl: './tennis-player-list.component.html',
  styleUrls: ['./tennis-player-list.component.scss']
})
export class TennisPlayerListComponent implements OnInit {
  /**
   * Envoi un événement à chauqe  modification de la sélection
   */
  @Output() selectionChanged = new EventEmitter<TennisPlayer>();


  /**
   * liste des joueurs
   */
  playersList: TennisPlayer[];
  
  constructor(private _tplayerService:TennisPlayerService) { 
    
  }

  ngOnInit(): void {
    // récupération de la liste des joueurs
    this.playersList = this._tplayerService.getAllPlayer();
    // si il y a plusieurs joueurs, alors on prend le premier et on le sélectionne
    if (this.playersList && this.playersList.some(v=>true)){
      this.selectPlayer(this.playersList[0]);
    }
    
  }

  /**
  * permet d'obtenir le joueur sélectionné
  */
  getSelectedPlayer(){
    return this._tplayerService.selectedPlayer;
  }

  /**
   * Permet la selection du joueur
   * @param pl : joueur à sélectionner
   */
  public selectPlayer(pl: TennisPlayer) {
    this._tplayerService.selectPlayer(pl);
    this.selectionChanged.emit(pl);
  }

  /**
   * Indique si le joueur donné est sélectionné ou non
   * @param pl 
   */
  isSelected(pl : TennisPlayer){
    return  pl == this._tplayerService.selectedPlayer;
  }

}
