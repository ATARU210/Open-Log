import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  validateClick:boolean = true;
  Register:boolean = false;


  constructor(private modal:LoginService) { }

  ngOnInit(): void {

  }
  clickBox(){

    this.validateClick = false;

  }

  closeLogin(){
    if(this.validateClick===true){
      this.modal.$modal.emit(false);
    }
    else{
      this.validateClick = true;
    }
  }

  clickLink(){
    this.clickBox()
    if(this.Register===false){
      this.Register=true
    }
    else{
      this.Register = false
    }
  }
}
