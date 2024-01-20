import { Injectable, inject, signal } from '@angular/core';
import { Currency } from '../types/currency.response';
import { ConverterApiService } from './converter-api.service';

@Injectable({
  providedIn: 'root',
})
export class ConverterService {
  apiService = inject(ConverterApiService);
  currencyData = signal<Currency[]>([]);

  getCurrency() {
    this.apiService
      .getCurrency()
      .pipe()
      .subscribe((response) => {
        const filter = response.filter(
          (currency: Currency) => currency.cc === 'USD' || currency.cc === 'EUR' || currency.cc === 'UAH'
        );
        filter.push({"r030": 980, "txt": "Гривня", "rate": 1, "cc": "UAH", "exchangedate": "21.12.2023"})
        this.currencyData.set(filter);
        console.log(this.currencyData());
        
      });
      
  }
}
