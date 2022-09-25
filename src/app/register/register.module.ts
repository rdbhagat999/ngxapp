import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AddressComponent } from './address/address.component';
import { CreditCardDirective } from './credit-card.directive';
import { InputFocusDirective } from './input-focus.directive';

const routes: Routes = [{ path: '', component: SignupComponent }];

@NgModule({
  declarations: [
    SignupComponent,
    AddressComponent,
    CreditCardDirective,
    InputFocusDirective,
  ],
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterModule {}
