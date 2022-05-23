import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  Login:boolean = false

  ActivarPedidos(){

    if(document.getElementById('pedidos')?.classList.contains('active')){
      document.getElementById('pedidos')?.classList.remove('active');
    }
    else{
      document.getElementById('pedidos')?.classList.add('active');
    }

  }
  abrirLogin(){

    this.Login = true

  }

  constructor(private modal:LoginService) { }

  ngOnInit(): void {

    this.modal.$modal.subscribe((value:boolean) => {this.Login = value})
    
  }

}
