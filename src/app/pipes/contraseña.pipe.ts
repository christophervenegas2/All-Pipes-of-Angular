import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrase'
})
export class ContraseñaPipe implements PipeTransform {

  transform(value: string, interruptor: boolean): string {
    return (interruptor) ? '*'.repeat( value.length ) : value;
  }

}
