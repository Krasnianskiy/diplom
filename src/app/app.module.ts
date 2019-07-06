import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatButtonToggleModule,
  MatDialogModule,
  MatFormFieldModule, MatInputModule, MatListModule,
  MatPaginatorModule, MatSelectModule, MatSidenavModule, MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { BanksComponentComponent } from './banks-component/banks-component.component';
import {RouterModule, Routes} from '@angular/router';
import { CurrencyComponent } from './currency/currency.component';
import {HttpService} from './HttpService';
import { CreateBankComponent } from './banks-component/create-bank/create-bank.component';
import { CreateCurrencyComponent } from './currency/create-currency/create-currency.component';

const appRoutes: Routes = [
  { path: '', component: BanksComponentComponent },
  { path: 'first', component: BanksComponentComponent },
  { path: 'second', component: CurrencyComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BanksComponentComponent,
    CurrencyComponent,
    CreateBankComponent,
    CreateCurrencyComponent
  ],
  entryComponents: [
    CreateBankComponent,
    CreateCurrencyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatTableModule,
    MatSortModule,
    RouterModule,
    MatSnackBarModule,
    RouterModule.forRoot(
      appRoutes,
      { useHash: true }
    ),
    MatPaginatorModule,
    MatDialogModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSidenavModule,
    MatButtonToggleModule,
    MatListModule

  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
