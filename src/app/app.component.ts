import { Component, inject } from '@angular/core';
import { ConverterService } from './services/converter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  converterService = inject(ConverterService);
 
  constructor() {
    this.converterService.getCurrency();
  }

  
}
