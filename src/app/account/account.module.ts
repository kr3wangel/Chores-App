import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account/account.component';
import { SharedModule } from '../shared/shared.module';
import { AccountRoutingModule } from './account-routing.module';
import { ChildDialogComponent } from './account/child-dialog/child-dialog.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AccountComponent, ChildDialogComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    FormsModule,
    SharedModule
  ],
  entryComponents: [
    ChildDialogComponent
  ]
})
export class AccountModule { }
