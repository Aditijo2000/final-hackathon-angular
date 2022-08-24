import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-shares',
  templateUrl: './my-shares.component.html',
  styleUrls: ['./my-shares.component.css']
})
export class MySharesComponent implements OnInit {

  constructor() { 
  }
  myShares: any;

  ngOnInit(): void {
     this.myShares= []

  }

}
