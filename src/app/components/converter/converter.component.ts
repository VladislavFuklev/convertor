import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import { ConverterService } from 'src/app/services/converter.service'

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss'],
})
export class ConverterComponent {
  service = inject(ConverterService)

  fromCurrency = 'UAH';
  toCurrency = 'USD';
  amountFrom = 0;
  amountTo = 0;

  convertCurrency(updateAmountTo?: boolean) {
    const fromRate = this.service.currencyData().find(currency => currency.cc === this.fromCurrency)?.rate;
    const toRate = this.service.currencyData().find(currency => currency.cc === this.toCurrency)?.rate;

    if (this.amountFrom !== undefined && fromRate !== undefined && toRate !== undefined) {
      const convertedAmount = (this.amountFrom * fromRate) / toRate;

      if (updateAmountTo) {
        this.amountTo = convertedAmount;
      } else {
        this.amountTo = convertedAmount;
      }
    }
  }

  onFromCurrencyChange() {
    this.convertCurrency();
  }

  onToCurrencyChange() {
    this.convertCurrency(true);
  }

  
}
