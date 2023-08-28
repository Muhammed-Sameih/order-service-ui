import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from "../shared/shared.module";
import { ProductInCartComponent } from './components/product-in-cart/product-in-cart.component';
import { PaymentFormComponent } from './components/payment-form/payment-form.component';



@NgModule({
    declarations: [
        CartComponent,
        ProductInCartComponent,
        PaymentFormComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        AppRoutingModule,
        SharedModule
    ]
})
export class CartsModule { }
