import { Component, OnInit } from '@angular/core';
import {HttpService} from '../HttpService';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {CreateCurrencyComponent} from './create-currency/create-currency.component';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
  dataSource: any;
  displayedColumns: string[] = ['id', 'Альфа-код', 'Альфа-код 2', 'Курс'];

  constructor(private httpService: HttpService, public dialog: MatDialog) { }

  ngOnInit() {
    this.httpService.getAllCurrencies().subscribe(responce => {
      this.dataSource = new MatTableDataSource(responce);
    });
  }

  createMapping() {
    this.dialog.open(CreateCurrencyComponent);
  }
}
