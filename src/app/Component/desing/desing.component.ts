import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desing',
  templateUrl: './desing.component.html',
  styleUrls: ['./desing.component.css']
})
export class DesingComponent implements OnInit {
  imageClothe: string = ""
  imageStamp: string = ""
  constructor() { 
    this.imageClothe = '/assets/img/camiza blanca.png'
    this.imageStamp = '/assets/img/prueba.webp'
  }

  ngOnInit(): void {
  }

}
