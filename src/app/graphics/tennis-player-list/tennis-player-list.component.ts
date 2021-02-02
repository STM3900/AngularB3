import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
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

  @Input() canChangeSelection=true;


  isReady = false;
  /**
  * liste des joueurs
  */

  myPlayerList$: Observable<TennisPlayer[]>;
  myPlayer: TennisPlayer[];
  myStrings : string[] = ['to'];
  playersListCount: number;

  constructor(private _tplayerService:TennisPlayerService) { }

  ngOnInit(): void {
    // récupération de la liste des joueurs
    console.log('avant le subscribe');


    this.myPlayerList$ = this._tplayerService.getAllPlayer()
    .pipe(
      tap((data)=>{
        this.isReady = true;
        this.playersListCount = data.length;
        if (data.length)
        this.selectPlayer(data[0])
      }));
      console.log('après le subscribe');
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
    * Sélection par l'interface, possible uniquement si on peut changer la sélection
    */
    onSelectionChange(pl:TennisPlayer){
      if (this.canChangeSelection)
      {
        this.selectPlayer(pl);
      }
    }
    /**
    * Indique si le joueur donné est sélectionné ou non
    * @param pl
    */
    isSelected(pl: TennisPlayer){
      return  pl == this._tplayerService.selectedPlayer;
    }

  }

