import { NgModule } from '@angular/core';
import { ProductService} from './product-service';
import { DalModule } from 'src/app/product-mgmt/dal';
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
