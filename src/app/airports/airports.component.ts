import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-airports',
  templateUrl: './airports.component.html',
  styleUrls: ['./airports.component.css']
})
export class AirportsComponent implements OnInit {
  private _departureInfo:any;
  private _destinationInfo:any;

  constructor() { }

  ngOnInit(): void {
  }

  get departureInfo(){
    return this._departureInfo;
  };

  set departureInfo(value:any){
    this._departureInfo = value
  };

  get destinationInfo(){
    return this._destinationInfo;
  };

  set destinationInfo(value:any){
    this._destinationInfo = value
  };

  airportsFrom = new FormGroup({
    departure: new FormControl(['']),
    destination: new FormControl([''])
  })


}
