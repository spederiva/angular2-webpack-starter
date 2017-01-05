import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'filterLetterImpure',
    pure: false
})
export class FilterLetterImpurePipe implements PipeTransform{
    transform(value:any, args:any):any {
        console.log('FilterLetter - Impure', value);

        return value && value.filter((v:any) => v.name.toLowerCase().indexOf('d') > -1);
    }

}

