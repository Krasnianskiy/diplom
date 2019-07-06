import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../HttpService';
import {BankDTO} from '../../interfaces/bankDTO';
import {BankImpl} from '../../Impl/bankImpl';

@Component({
  selector: 'app-create-bank',
  templateUrl: './create-bank.component.html',
  styleUrls: ['./create-bank.component.css']
})
export class CreateBankComponent implements OnInit {

  bank: BankDTO;

  constructor(private httpservice: HttpService) { }

  ngOnInit() {
    this.bank = new BankImpl();
  }

  create(bank: BankDTO) {
    this.httpservice.createBank(bank).subscribe(responce => {
    });
  }
}
