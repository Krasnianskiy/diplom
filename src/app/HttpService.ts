import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BankDTO} from './interfaces/bankDTO';
// @ts-ignore
import {CurrencyDTO} from './interfaces/currencyDTO';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) {
  }

  public getAllBanks() {
    return this.http.get<Array<BankDTO>>('/bank/getAllBanks');
  }

  public getAllCurrencies() {
    return this.http.get<Array<CurrencyDTO>>('/currency/getAll');
  }

  public createBank(bank: BankDTO) {
    return this.http.post('/bank/create', bank);
  }

  public createCurrency(currency: CurrencyDTO) {
    return this.http.post('/currency/create', currency);
  }
}
