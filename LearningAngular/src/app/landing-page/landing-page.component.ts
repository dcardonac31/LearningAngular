import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  ngOnInit(): void {
      this.peliculasEnCines = [
        {
          titulo: 'Spider-Man: Fram from home',
          fechaLanzamiento: new Date(),
          precio: 1040.49.toExponential,
          poster: 'https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg'
        },
        {
          titulo: 'Moana',
          fechaLanzamiento: new Date('2021-04-21'),
          precio: 1300.55,
          poster: 'https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_UX182_CR0,0,182,268_AL_.jpg'
        },
        {
          titulo: 'El señor de los anillos',
          fechaLanzamiento: new Date('2000-01-01'),
          precio: 1300.55,
          poster: 'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UX182_CR0,0,182,268_AL_.jpg'
        },
      ];
  }
  peliculasEnCines;
  peliculaProximosEstrenos = [
    // {
    //   titulo: 'Avengers: End Game',
    //   fechaLanzamiento: new Date(),
    //   precio: 1040.49
    // },
    // {
    //   titulo: 'Inception',
    //   fechaLanzamiento: new Date('2021-04-21'),
    //   precio: 1300.55
    // },
    // {
    //   titulo: 'Lord of the rings',
    //   fechaLanzamiento: new Date('2021-04-21'),
    //   precio: 1300.55
    // },
  ];

}
