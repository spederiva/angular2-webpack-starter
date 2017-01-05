import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'filterLetterPure'
})
export class FilterLetterPurePipe implements PipeTransform{
    transform(value:any, args:any):any {
        console.log('FilterLetter - Pure', value);

        return value && value.filter((v:any) => v.name.toLowerCase().indexOf('d') > -1);
    }

}

