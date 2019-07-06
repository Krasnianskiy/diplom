import { Component, OnInit } from '@angular/core';
// @ts-ignore
import {CurrencyDTO} from '../../interfaces/currencyDTO';
import {HttpService} from '../../HttpService';
import {CurrencyImpl} from '../../Impl/CurrencyImpl';

@Component({
  selector: 'app-create-currency',
  templateUrl: './create-currency.component.html',
  styleUrls: ['./create-currency.component.css']
})
export class CreateCurrencyComponent implements OnInit {
  currency: CurrencyDTO;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.currency = new CurrencyImpl();
  }

  create(currency: CurrencyDTO) {
    this.httpService.createCurrency(currency).subscribe();
  }
}
