import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-soporte',
  templateUrl: './soporte.component.html',
  styleUrls: ['./soporte.component.css']
})
export class SoporteComponent implements OnInit {

  ActivarText(){

    if(document.getElementById('textos')?.classList.contains('active')){
      document.getElementById('textos')?.classList.remove('active');
    }
    else{
      document.getElementById('textos')?.classList.add('active');
    }

  }

  constructor() { }

  ngOnInit(): void {
  }

}
