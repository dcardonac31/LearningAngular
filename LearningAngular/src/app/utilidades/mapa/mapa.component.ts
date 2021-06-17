import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { tileLayer, latLng, LeafletMouseEvent, Marker, marker } from 'leaflet';
import { Coordenada } from './coordenada';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  constructor() { }

  @Input()
  coordenadasInciales : Coordenada[] = [];

  @Output()
  coordenadaSeleccionada: EventEmitter<Coordenada> = new EventEmitter<Coordenada>();

  ngOnInit(): void {
    this.capas = this.coordenadasInciales.map(valor => marker([valor.latitud, valor.longitud]));
  }

  options = {
    layers: [
        tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 17,
    center: latLng(6.176565296894147, -435.5915272235871)
};

capas: Marker<any>[] = [];

manejarClick(event: LeafletMouseEvent){
  const latitud = event.latlng.lat;
  const longitud = event.latlng.lng;
  console.log({latitud,longitud});

  this.capas = [];
  this.capas.push(marker([latitud, longitud]));
  this.coordenadaSeleccionada.emit({latitud: latitud, longitud: longitud });
}

}
