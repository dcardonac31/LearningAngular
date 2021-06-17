import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { primeraLetraMayuscula } from 'src/app/utilidades/validadores/primeraLetraMayuscula';
import { generoCreacionDTO } from '../genero';



@Component({
  selector: 'app-formulario-genero',
  templateUrl: './formulario-genero.component.html',
  styleUrls: ['./formulario-genero.component.css']
})
export class FormularioGeneroComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;

  @Input()
  modelo: generoCreacionDTO;

  @Output()
  submit: EventEmitter<generoCreacionDTO> = new EventEmitter<generoCreacionDTO>();

  minLen = 1
  maxLen = 30

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['', {
        validators:
         [Validators.required, 
          Validators.minLength(this.minLen), 
          Validators.maxLength(this.maxLen),
          primeraLetraMayuscula()
        ]
      }]
    });

    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }

  
  guardarCambios(){
    this.submit.emit(this.form.value);
  }

  obtenerErrorCampoNombre(){
    var campo = this.form.get('nombre');
    if(campo.hasError('required')){
      return 'El campo nombre es requerido';
    }

    if(campo.hasError('minlength')){
      return 'La longitud requerida es de '+ this.minLen +' caracteres'
    }

    if(campo.hasError('maxlength')){
      return 'La longitud maxima permitida es de '+ this.maxLen +' caracteres'
    }

    if(campo.hasError('primeraLetraMayuscula')){
      return campo.getError('primeraLetraMayuscula').mensaje;
    }

    return '';
  }

}
