import { Component, inject } from '@angular/core';
import { ConverterService } from './services/converter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  converterService = inject(ConverterService);
  blocks = [
    { value: 0, currency: 'RUB' },
    { value: 0, currency: 'USD' }
  ];
  constructor() {
    this.converterService.getCurrency();
  }
  onChangeCurrency(currency: string) {
    console.log(currency);
  }
  
}
