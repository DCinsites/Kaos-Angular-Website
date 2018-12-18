import { SessionFlow } from './../../session-flow/src/session-flow';
import { DalModule } from './../../dal/src/dal.module';

import { NgModule } from '@angular/core';

import { BasketService }   from './basket.service';

/**
 * Module that contain data and methods to work with basket
 */
@NgModule({
    imports: [DalModule],
    exports: [],
    declarations: [],
    providers: [BasketService, SessionFlow],
})
export class BasketServiceModule { }
