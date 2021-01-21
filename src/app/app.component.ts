import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  nombre: string = 'Capitan America';
  nombre2: string = 'kerRY CUra'

  personajes: string[] = ["Ironman","Spiderman","Thor","Loki","Groot",];

  arreglo: number[] = [1,2,3,4,5,6,7,8,9,10];

  PI: number = Math.PI;
  porcentaje: number = 0.236;
  salario: number = 312312.56;
  fecha: Date = new Date();
  activar: boolean = true;

  idioma : string = 'en';
  videoUrl : string = 'https://www.youtube.com/embed/-CBKW-90VxQ';

  valorPromesa = new Promise<string>( (resolve) => {

    setTimeout(() => {
      resolve('llego la data');
    }, 4500)

  });

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: { 
      calle: 'Primera',
      casa: 20,
    }
  }
}
