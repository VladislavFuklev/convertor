import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs'
import { Currency } from '../types/currency.response'

@Injectable({
  providedIn: 'root'
})
export class ConverterApiService {
  private http = inject(HttpClient)
   currencyUrl = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=20231221&json'

  getCurrency() : Observable<Currency[]> {
    return this.http.get<Currency[]>(this.currencyUrl)
  }
 
}
