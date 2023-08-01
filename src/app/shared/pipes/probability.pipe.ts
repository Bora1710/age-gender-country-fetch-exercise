import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'probability',
})
export class ProbabilityPipe implements PipeTransform {
  transform(value: number): number {
    if (isNaN(value)) {
      return 0;
    }
    return value * 100;
  }
}
