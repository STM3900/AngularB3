import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bonjour',
  templateUrl: './bonjour.component.html',
  styleUrls: ['./bonjour.component.scss']
})
export class BonjourComponent implements OnInit {

  constructor(private _router:Router, private _r: ActivatedRoute) { }


  prenom="";
  ngOnInit(): void {

    this._r.paramMap.subscribe((v)=>{
      this.prenom= v.get('id');
    });
  }

  onSubmit(){
    this._router.navigateByUrl('/');
  }

}
