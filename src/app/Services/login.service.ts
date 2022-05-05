import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  $modal = new EventEmitter<any>();

  constructor() { }
}

