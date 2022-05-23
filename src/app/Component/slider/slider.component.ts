import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit{

  constructor() { }

  ngOnInit(): void {
      this.AutoChange();
  }
  

  i:boolean = false;
  indice:number = 1;

  AutoChange(){
      setTimeout(() =>{
        console.log('T2: ', new Date());
    },2000);
  }

  avanzaSlide(n:number){
    this.muestraSlide(this.indice+=n);
  }

 positionSlide(n:number){
    this.muestraSlide(this.indice=n);
}

 muestraSlide(n:number){
    let i;
    let slides = document.getElementsByClassName('slider');
    let barras = document.getElementsByClassName('barra');

    if(n > slides.length){
        this.indice = 1;
    }
    if(n < 1){
        this.indice = slides.length
    }
    for(i = 0; i < slides.length; i++){
        slides[i].setAttribute("style","display: none;")
    }
    for(i = 0; i < barras.length; i++){
        barras[i].className = barras[i].className.replace(" active", "");
    }

    slides[this.indice-1].setAttribute("style","display: block;")
    barras[this.indice-1].className += ' active';
}

}

