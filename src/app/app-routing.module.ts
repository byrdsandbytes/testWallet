import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/transaction-list/transaction-list.module').then( m => m.TransactionListPageModule)
  },
  {
    path: 'transaction-list',
    loadChildren: () => import('./pages/transaction-list/transaction-list.module').then( m => m.TransactionListPageModule)
  },
  {
    path: 'transaction',
    loadChildren: () => import('./pages/transaction-details/transaction-details.module').then( m => m.TransactionDetailsPageModule)
  },
  {
    path: 'transaction/:id',
    loadChildren: () => import('./pages/transaction-details/transaction-details.module').then( m => m.TransactionDetailsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
