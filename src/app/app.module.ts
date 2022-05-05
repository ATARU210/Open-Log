import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Component/header/header.component';
import { InicioComponent } from './Component/inicio/inicio.component';
import { SoporteComponent } from './Component/soporte/soporte.component';
import { SliderComponent } from './Component/slider/slider.component';
import { FooterComponent } from './Component/footer/footer.component';
import { ComprasBackgroundComponent } from './Component/compras-background/compras-background.component';
import { ComprasComponent } from './Component/compras/compras.component';
import { DesingComponent } from './Component/desing/desing.component';
import { LoginComponent } from './Component/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './Component/info/info.component';

const appRoutes:Routes=[

  {path:'', component:InicioComponent},
  {path:'Compra', component:ComprasComponent},
  {path:'Diseño', component:DesingComponent},
  {path:'info', component:InfoComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
    SoporteComponent,
    SliderComponent,
    FooterComponent,
    ComprasBackgroundComponent,
    ComprasComponent,
    DesingComponent,
    LoginComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
