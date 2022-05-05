import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {

  imageClothe: string = ""
  imageStamp: string = ""
  
  constructor() { 
    this.imageClothe = '/assets/img/camiza blanca.png'
    this.imageStamp = '/assets/img/prueba.webp'
  }

  ngOnInit(): void {
  }

}
