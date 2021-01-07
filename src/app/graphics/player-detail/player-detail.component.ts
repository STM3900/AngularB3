import { Component, Input, OnInit, Output } from '@angular/core';
import { TennisPlayer } from 'src/app/Model/tennis-player';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.scss']
})
export class PlayerDetailComponent implements OnInit {

  @Input() public selectedPlayer: TennisPlayer;
  
  constructor() { }

  ngOnInit(): void {
  }

}
