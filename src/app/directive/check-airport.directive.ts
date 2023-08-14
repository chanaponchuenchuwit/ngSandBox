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
    this.checkDuplicateIata(inputValue)
  }

  checkDuplicateIata(inputValue:any){
      // Map
    if(mapAirportData.has(inputValue.toUpperCase())){
      this.getInfoAirport.emit(mapAirportData.get(inputValue.toUpperCase()))
    }
    else {
      this.getInfoAirport.emit(null)
    }
  }

  changeBorderTextBox(color:string){
    this.el.nativeElement.style.borderColor = color;
  }


}
