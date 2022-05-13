import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private readonly router:Router) { }

  ngOnInit(): void {
    console.log()
  }  

  Send(number:number){
    this.router.navigate(["/info"], {queryParams: {id: number}})
  }
  

}
