import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-airports',
  templateUrl: './airports.component.html',
  styleUrls: ['./airports.component.css']
})
export class AirportsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  airportsFrom = new FormGroup({
    departure: new FormControl(['']),
    destination: new FormControl([''])
  })

}
