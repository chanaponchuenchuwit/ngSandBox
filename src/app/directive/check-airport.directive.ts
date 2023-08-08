import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';
import { mapAirportData, objAirportDate } from '../data/AirportModel';


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
    // Map
    if(mapAirportData.get(inputValue.toUpperCase())){
      this.getInfoAirport.emit(mapAirportData.get(inputValue.toUpperCase()))
      return true
    }

    // Array
    // for(const icao in objAirportDate){
    //   if(inputValue === ''){
    //     return false;
    //   }
    //   if(objAirportDate[icao].iata === inputValue.toUpperCase()){
    //     this.getInfoAirport.emit(objAirportDate[icao])
    //     return true
    //   }
    // }

    this.getInfoAirport.emit(null)
    return false;
  }

  changeBorderTextBox(color:string){
    this.el.nativeElement.style.borderColor = color;
  }


}
