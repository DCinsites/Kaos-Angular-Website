import { DalModule } from 'src/app/main/dal';
import { NgModule } from '@angular/core';
import { ProductService } from './product-service';

/**
 * Product service module. Product service implements logic of manipulating
 */
@NgModule({
    imports: [
        DalModule
    ],
    providers: [
        ProductService
    ]
})
export class ProductServiceModule { }
