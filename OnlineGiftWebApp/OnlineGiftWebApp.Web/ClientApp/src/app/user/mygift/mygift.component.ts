import { Component, OnInit } from '@angular/core';
export interface food  {
  value: string;
  viewValue: string;
}
export interface country  {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-mygift',
  templateUrl: './mygift.component.html',
  styleUrls: ['./mygift.component.css']
})


export class MygiftComponent implements OnInit {
  foods: food[] = [
    {value: 'Newestt Gift', viewValue: 'Newestt Gift'},
    {value: 'Best Gift', viewValue: 'Best Gift'},
    {value: 'most Sending', viewValue: 'most Sending'}
  ];

  countrys: country[] = [
    {value: 'USA', viewValue: 'USA'},
    {value: 'India', viewValue: 'India'},
    {value: 'Russia', viewValue: 'Russia'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
