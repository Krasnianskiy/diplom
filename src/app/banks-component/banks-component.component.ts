import { Component, OnInit } from '@angular/core';
import {HttpService} from '../HttpService';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {CreateBankComponent} from './create-bank/create-bank.component';

@Component({
  selector: 'app-banks-component',
  templateUrl: './banks-component.component.html',
  styleUrls: ['./banks-component.component.css']
})
export class BanksComponentComponent implements OnInit {
  dataSource;
  displayedColumns: string[] = ['Имя банка', 'Сокращенное имя', 'Адрес', 'Бик банка', 'Кор. счет'];

  constructor(private httpservice: HttpService, private dialog: MatDialog) { }

  ngOnInit() {
    this.httpservice.getAllBanks().subscribe(responce => {
      this.dataSource = new MatTableDataSource(responce);
    });
  }

  createBank() {
    this.dialog.open(CreateBankComponent);
  }
}
