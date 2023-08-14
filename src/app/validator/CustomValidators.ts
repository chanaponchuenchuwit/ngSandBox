import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { mapAirportData } from "../data/AirportModel";

export function isIata():ValidatorFn{
    return (control: AbstractControl): ValidationErrors | null => {
        return mapAirportData.has(control.value) ? null : {isIata:{value: control.value}}
    }
}