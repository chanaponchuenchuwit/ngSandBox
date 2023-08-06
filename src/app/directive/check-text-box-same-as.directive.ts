import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appCheckTextBoxSameAs]'
})
export class CheckTextBoxSameAsDirective {

  constructor(private el: ElementRef) { }

  @Input() appCheckTextBoxSameAs = ''

    
  @HostListener('input', ['$event.target.value'])
  onInputChange(inputValue: string) {// Get the value of the input element
    if(inputValue === this.appCheckTextBoxSameAs){
      this.changeBorderTextBox('#F7E987')
    }
  }

  changeBorderTextBox(color:string){
    this.el.nativeElement.style.borderColor = color;
  }

}
