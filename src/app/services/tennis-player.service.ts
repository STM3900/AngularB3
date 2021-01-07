import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TennisPlayerService {

  public nom="Titi";
  constructor(private _http: HttpClient) { 
    
  }

  getAllPlayer(){
    return this._http.get('/webapi/players/getAll');
  }


}
