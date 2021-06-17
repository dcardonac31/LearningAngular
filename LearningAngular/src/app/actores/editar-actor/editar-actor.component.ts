import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { actorCreacionDTO, actorDTO } from '../actor';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.css']
})
export class EditarActorComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  modelo: actorDTO = {nombre: 'David', fechaNacimiento: new Date(), foto:'https://m.media-amazon.com/images/M/MV5BODNkYTFmY2QtMTFhYy00MzhkLWEwMGQtMjZmNzI4ZDM0NGUzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY351_SX624_AL_.jpg'}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      //alert(params.id);
    })
  }

  guardarCambios(actor: actorCreacionDTO){
    console.log(actor);
  }

}
