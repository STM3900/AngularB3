import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TennisPlayer } from 'src/app/Model/tennis-player';
import { TennisPlayerService } from 'src/app/services/tennis-player.service';

@Component({
  selector: 'app-tennis-player-form',
  templateUrl: './tennis-player-form.component.html',
  styleUrls: ['./tennis-player-form.component.scss']
})
export class TennisPlayerFormComponent implements OnInit {


  
  @Output() done = new EventEmitter();


  private _player:TennisPlayer;
  @Input() set player(value:TennisPlayer){
    this._player = value;
    this.playerForm.setValue(this.player);
  }

  get player(){
    return this._player;
  }
  

  constructor(private fb: FormBuilder, private _tplayerService: TennisPlayerService) { 
    
  }

  playerForm = this.fb.group({
    id:[''],
    name:['', [Validators.required]],
    firstName:[''],
    mail:['', [Validators.required, Validators.email]]

  })

  ngOnInit(): void {
    
  }
  onCancel(){
    this.done.emit();
  }
  submit(): void {
      this.player = this.playerForm.value;
      this._tplayerService.UpdatePlayer(this.player);
      this._tplayerService.selectPlayer(this.player);
      this.done.emit();
  }


  shouldShowRequiredError(control: AbstractControl){
    return !control.pristine && control.hasError('required');
  }

  shouldShowError(control: AbstractControl){
    return !control.pristine && control.invalid;
  }

  getNom(){
    return this._tplayerService.nom;
  }

}
