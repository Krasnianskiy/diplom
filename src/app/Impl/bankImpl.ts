import {BankDTO} from '../interfaces/bankDTO';

export class BankImpl implements BankDTO{
  account: string;
  address: string;
  bik_bank: string;
  id: number;
  name: string;
  name_mini: string;
}
