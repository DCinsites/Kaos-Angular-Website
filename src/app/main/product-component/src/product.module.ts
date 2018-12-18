import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductServiceModule } from "src/app/main/productservice";
import { BasketServiceModule } from 'src/app/main/basketservice';
import { BrowserModule } from '@angular/platform-browser';
import { ProductComponent } from './product.component';
import { CommonModule } from '@angular/common';

/**
 * Module that represent product page
 */
@NgModule({
    imports: [BasketServiceModule, ProductServiceModule, CommonModule, RouterModule],
    exports: [ProductComponent],
    declarations: [ProductComponent],
    providers: [],
})
export class ProductModule { }
