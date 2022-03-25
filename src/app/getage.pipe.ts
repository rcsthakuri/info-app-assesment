import { PipeTransform, Pipe } from '@angular/core';

 @Pipe({
    name: "GetAge"
 })
export class GetAge implements PipeTransform {
    transform(value: string) {
        const dob: Date = new Date(value);
        const tday = new Date();
        let age = tday.getFullYear() - dob.getFullYear();
        return age.toString();
    }

}