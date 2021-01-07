import { Component, Input, OnInit, Output } from '@angular/core';
import { TennisPlayer } from 'src/app/Model/tennis-player';

@Component({
  selector: 'app-tennis-player-detail',
  templateUrl: './tennis-player-detail.component.html',
  styleUrls: ['./tennis-player-detail.component.scss']
})
export class TennisPlayerDetailComponent implements OnInit {

  @Input() public selectedPlayer: TennisPlayer;
  
  constructor() { }

  ngOnInit(): void {
  }

}
