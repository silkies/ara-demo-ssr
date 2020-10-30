import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomEventsService {
  events = {
    PRODUCT_ADDED: 'PRODUCT_ADDED'
  };

  constructor() { }

  dispatchEvent(event) {
    window.dispatchEvent(new CustomEvent(event));
  }
}
