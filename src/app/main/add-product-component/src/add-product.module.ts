import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AddProductComponent } from './add-product.component';
import { ProductServiceModule } from 'src/app/main/productservice';
import { CommonModule } from '@angular/common';

/**
 * It's a simple form to add products to database
 */
@NgModule({
    imports: [ProductServiceModule, FormsModule, CommonModule, ReactiveFormsModule, BrowserModule],
    exports: [AddProductComponent],
    declarations: [AddProductComponent],
    providers: []
})
export class AddProductModule { }
