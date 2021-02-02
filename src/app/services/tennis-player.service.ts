import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, shareReplay } from 'rxjs/operators';
import { TennisPlayer } from '../Model/tennis-player';

@Injectable({
  providedIn: 'root'
})
export class TennisPlayerService {
  private playersList: TennisPlayer[] = [];

  public selectedPlayer:TennisPlayer;
  public nom="Titi";
  constructor(private http: HttpClient) {
    if (this.playersList && this.playersList.length){
      this.selectedPlayer = this.playersList[0];
    }

  }


  private getAllPlayer$ = this.http.get<TennisPlayer[]>('assets/players.json').pipe(
    map((data : TennisPlayer[])=>{
      // création d'un autre tableau
      const result: TennisPlayer[] = [];
      data.forEach(element => {
        result.push(new TennisPlayer(element));
      });
      this.playersList = result;
      return result;
      // autre méthode (plus élégante mais attention à la confusion avec map (rxjs) et map (sur les tableaux))
      //  => équivalent du .Select en c# avec Linq => cette fonction map s'applique sur les tableaux
      return data.map(e=>new TennisPlayer(e));
    }),
    shareReplay(1),
    map((d)=> this.playersList)
  );

  getAllPlayer(){
    return this.getAllPlayer$;
    // 1. problème du format des données reçues
    // 2. Est-ce que l'adresse existe => est-elle atteignable
    // 3. Sécurisation du serveur
    //return this.http.get<TennisPlayer[]>('assets/playerList.json')

  }


  public getById(id : number){
    return this.getAllPlayer$.pipe(
      // faire le job pour retourner uniquement le bon joueur
      // à vous d'inventer le code pour la question 5 !
      map((d)=>d.length)

    )
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
