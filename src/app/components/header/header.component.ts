import { Component, inject } from '@angular/core';
import { ConverterService } from 'src/app/services/converter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  converterService = inject(ConverterService);
}
