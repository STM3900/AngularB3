import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { TennisPlayerComponent } from '../graphics/tennis-player/tennis-player.component';
import { TennisPlayer } from '../Model/tennis-player';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.scss']
})
export class PlayerFormComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    debugger;
    this.playerForm.setValue(this.TennisPlayer);
  }


  public TennisPlayer :TennisPlayer={
    id: 1,
    name: "sqdf",
    firstName:"toto"
  };
  public playerForm = this.fb.group({
    id: [''],
    firstName: ['', Validators.required],
    name: ['']
  });

  onSubmit(){
    debugger;
  }

  public hasRequiredError(control: AbstractControl){
    return control.touched && control.hasError('required');
 

  }

   public onClick() {
    this.player.firstName = "Jim";
    this.player.name = "Courier";
    this.modify = !this.modify;
  }
}
