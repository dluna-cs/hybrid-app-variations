import { Component, OnInit } from '@angular/core';
import { ContentsquareService } from '../services/contentsquare.service';

declare type TransactionItemApp = {
  title: string;
  transactionValue: any;
  transactionCurrency: any;
  transactionId?: any;
}

declare type TransactionItemTyped = TransactionItemApp & {
  title: string;
}


@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.page.html',
  styleUrls: ['./transaction.page.scss'],
})
export class TransactionPage {
  public transactionItems: TransactionItemApp[] = [
    {
      title: 'IntWithCurrencyCode',
      transactionValue: 10,
      transactionCurrency: 'USD',
    },
    {
      title: 'IntWithInvalidIntCurrency',
      transactionValue: 10,
      transactionCurrency: 9999999,
    },
    {
      title: 'IntWithValidUppercaseStringCurrency',
      transactionValue: 10,
      transactionCurrency: 'USD',
    },
    {
      title: 'IntWithValidLowercaseStringCurrency',
      transactionValue: 10,
      transactionCurrency: 'usd',
    },
    {
      title: 'IntWithInvalidStringCurrency',
      transactionValue: 10,
      transactionCurrency: 'DEFINITELY NOT VALID',
    },
    {
      title: 'IntWithID',
      transactionValue: 10,
      transactionCurrency: 'USD',
      transactionId: 'my usd transaction',
    },
    {
      title: 'Float',
      transactionValue: 50.5,
      transactionCurrency: 'MAD',
    },
    {
      title: 'Zero',
      transactionValue: 0,
      transactionCurrency: 'EUR',
    },
    {
      title: 'Negative',
      transactionValue: -10,
      transactionCurrency: 'GBP',
    },
  ];

  public transactionItemsTyped: TransactionItemTyped[] = [
    {
      title: 'IntWithCurrencyCode',
      transactionValue: 10,
      transactionCurrency: 'USD',
    },
    {
      title: 'IntWithValidUppercaseStringCurrency',
      transactionValue: 10,
      transactionCurrency: 'USD',
    },
    {
      title: 'IntWithID',
      transactionValue: 10,
      transactionCurrency: 'USD',
      transactionId: 'my usd transaction',
    },
    {
      title: 'Float',
      transactionValue: 50.5,
      transactionCurrency: 'MAD',
    },
    {
      title: 'Zero',
      transactionValue: 0,
      transactionCurrency: 'EUR',
    },
    {
      title: 'Negative',
      transactionValue: -10,
      transactionCurrency: 'GBP',
    }
  ];

  constructor(private contentsquareService: ContentsquareService) {}

  sendTransaction(item: TransactionItemApp) {
    this.contentsquareService.sendCommand('sendTransaction', {
      value: item.transactionValue,
      currency: item.transactionCurrency,
      id: item.transactionId || null
    })
  }

  sendTransactionTyped(item: TransactionItemTyped) {
    this.contentsquareService.sendCommand('sendTransaction', {
      value: item.transactionValue,
      currency: item.transactionCurrency,
      id: item.transactionId || null
    })
  }
}
