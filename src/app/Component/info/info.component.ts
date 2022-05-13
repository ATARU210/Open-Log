import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  title:string="Open Log"
  text:string="lorem"
  id!:number

  constructor(private readonly route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (params: Params) => {
        this.id = parseInt(params['id'])
      }
    )
    
      if(this.id===0){
        this.title="Open Log"
        this.text="lorem"
      }
      if(this.id===1){
        this.title="Copyright"
        this.text="lorem"
      }
      if(this.id===2){
        this.title="Privacidad"
        this.text="lorem"
      }
      if(this.id===3){
        this.title="Contacto"
        this.text="lorem"
      }
    
  }


  changeContent(id:number){
    if(id===0){
      this.title="Open Log"
      this.text="lorem"
    }
    if(id===1){
      this.title="Copyright"
      this.text="lorem"
    }
    if(id===2){
      this.title="Privacidad"
      this.text="lorem"
    }
    if(id===3){
      this.title="Contacto"
      this.text="lorem"
    }
  }
}
