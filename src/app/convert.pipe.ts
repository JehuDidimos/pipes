import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {


  transform(value: number, targetUnit?: string): number {
    if(!value){
      return 0.0;
    }

    switch (targetUnit){
      case 'km':
        return value * 1.60934
        
      case 'm':
        return value * 1.60934 * 1000

      case 'cm':
        return value * 1.60934 * 1000 * 1000

      default:
        return value
        
    }
    
  }
}
