import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterOfertas'
})
export class FilterOfertasPipe implements PipeTransform {
    
  transform(value: any, arg: any): any {

    /*Value equivale a todos nuestros alumnos*/
const resultOfertas: Array<any> = [];
for (const oferta of value) {
if (oferta.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
resultOfertas.push(oferta);
//Almacenamos el alumno que coincida con esa búsqueda.
}
}

    return resultOfertas;
  }

}
