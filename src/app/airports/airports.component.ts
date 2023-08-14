import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { mapAirportData } from '../data/AirportModel';

@Component({
  selector: 'app-airports',
  templateUrl: './airports.component.html',
  styleUrls: ['./airports.component.css']
})
export class AirportsComponent implements OnInit {
  private _departureInfo:any;
  private _destinationInfo:any;
  airportsFrom: FormGroup;

  constructor(private fb: FormBuilder) {
    this.airportsFrom = this.fb.group({
      departure: ['', [this.isIata()]],
      destination: ['', [this.isIata()]]
    })
  }


  ngOnInit(): void {}

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


  isIata():ValidatorFn{
    return (control: AbstractControl): ValidationErrors | null => {
        return mapAirportData.has(control.value.toUpperCase()) ? null : {isIata:{value: control.value}}
    }
  }
}
