import { Directive, ElementRef, EventEmitter, HostListener, Input, OnChanges, Output } from '@angular/core';
import { airportsData } from '../data/airportsData';

@Directive({
  selector: '[appCheckAirport]'
})
export class CheckAirportDirective{

  @Output() getInfoAirport = new EventEmitter<any>()

  constructor(private el: ElementRef) { 
  }
  
  @HostListener('input', ['$event.target.value'])
  onInputChange(inputValue: string) {// Get the value of the input element
    if (this.checkDuplicateIata(inputValue)) {
      this.changeBorderTextBox('green');
    } else {
      this.changeBorderTextBox('red');
    }
  }


  checkDuplicateIata(inputValue:any):boolean{
    for(const icao in airportsData){
      if(inputValue === ''){
        return false;
      }
      if(airportsData[icao].iata === inputValue.toUpperCase()){
        this.getInfoAirport.emit(airportsData[icao])
        return true
      }
    }
    return false;
  }

  changeBorderTextBox(color:string){
    this.el.nativeElement.style.borderColor = color;
  }


}
