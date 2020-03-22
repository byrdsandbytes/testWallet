import { TransactionService, Transaction } from './../../services/transaction.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.page.html',
  styleUrls: ['./transaction-details.page.scss'],
})
export class TransactionDetailsPage implements OnInit {

  transaction: Transaction = {
    name: '',
    amount: 0,
    currency: 'CHF',
    accountId: 'fFXDe0RztFrv05TJXpAz',
  };

  public transactions: Observable<Transaction[]>;
  public walletBalance: number;

  constructor(private activatedRoute: ActivatedRoute, private transactionService: TransactionService,
              private toastCtrl: ToastController, private router: Router) { }

  ngOnInit() {
    this.transactions = this.transactionService.getTransactions(this.transaction.accountId);
    this.transactions.subscribe(transactionList => {
      this.walletBalance = 0;
      transactionList.forEach(transaction => {
        this.walletBalance = this.walletBalance + transaction.amount;
        console.log('Wallet Balance is:', this.walletBalance);
      });
    });
  }

  ionViewWillEnter() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.transactionService.getTransaction(id).subscribe(transaction => {
        this.transaction = transaction;
      });
    }
  }

  addTransaction() {

    if (this.walletBalance > this.transaction.amount) {
        this.showToast('Wallet Balance not enough');
    } else {
      this.transactionService.addTransaction(this.transaction).then(() => {
        this.router.navigateByUrl('/');
        this.showToast('Transaction added');
      }, err => {
        this.showToast('There was a problem adding your transaction :(');
      });
    }
  }

  deleteTransaction() {
    this.transactionService.deleteTransaction(this.transaction.id).then(() => {
      this.router.navigateByUrl('/');
      this.showToast('Transaction deleted');
    }, err => {
      this.showToast('There was a problem deleting your transaction :(');
    });
  }

  updateTransaction() {
    this.transactionService.updateTransaction(this.transaction).then(() => {
      this.showToast('Transaction updated');
    }, err => {
      this.showToast('There was a problem updating your transaction :(');
    });
  }

  showToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 2000
    }).then(toast => toast.present());
  }

}
