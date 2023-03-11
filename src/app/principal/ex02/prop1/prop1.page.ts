import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prop1',
  templateUrl: './prop1.page.html',
  styleUrls: ['./prop1.page.scss'],
})
export class Prop1Page implements OnInit {

  n1 : number;
  n2 : number;
  soma : number;

  constructor() { }

  ngOnInit() {
  }

  somar(){
    this.soma = Number(this.n1) + Number(this.n2);
  }

}
