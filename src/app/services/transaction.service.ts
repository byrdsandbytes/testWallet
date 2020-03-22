import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map, take } from 'rxjs/operators';
import { AngularFirestoreCollection, AngularFirestore, DocumentReference } from '@angular/fire/firestore';


export interface Transaction {
  id?: string;
  name: string;
  amount: number;
  currency: string;
  accountId: string;
}

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private transactions: Observable<Transaction[]>;
  private transactionCollection: AngularFirestoreCollection<Transaction>;

  constructor(private afs: AngularFirestore) {
    this.transactionCollection = this.afs.collection<Transaction>('transactions');
    this.transactions = this.transactionCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getTransactions(accountIdForUser: string): Observable<Transaction[]> {
    const accountRef = this.afs.collection<Transaction>('transactions', ref => ref
    .where('accountId', '==', accountIdForUser)
    );

    const transactions = accountRef.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          // console.log("Users: " , data);
          return { id, ...data };
        });
      })
    );
    return transactions;
  }

  getTransaction(id: string): Observable<Transaction> {
    return this.transactionCollection.doc<Transaction>(id).valueChanges().pipe(
      take(1),
      map(transaction => {
        transaction.id = id;
        return transaction;
      })
    );
  }

  addTransaction(transaction: Transaction): Promise<DocumentReference> {
    return this.transactionCollection.add(transaction);
  }

  updateTransaction(transaction: Transaction): Promise<void> {
    return this.transactionCollection.doc(transaction.id).update(transaction);
  }

  deleteTransaction(id: string): Promise<void> {
    return this.transactionCollection.doc(id).delete();
  }
}

