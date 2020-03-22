import { TransactionService, Transaction } from './../../services/transaction.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.page.html',
  styleUrls: ['./transaction-list.page.scss'],
})
export class TransactionListPage implements OnInit {

  public transactions: Observable<Transaction[]>;
  public walletBalance: number;
  private userAccountId =  'fFXDe0RztFrv05TJXpAz';

  constructor(private transactionService: TransactionService) { }

  ngOnInit() {
    this.transactions = this.transactionService.getTransactions(this.userAccountId);
    this.transactions.subscribe(transactionList => {
      this.walletBalance = 0;
      transactionList.forEach(transaction => {
        this.walletBalance = this.walletBalance + transaction.amount;
        console.log('Wallet Balance is:', this.walletBalance);
      });
    });
  }

}
