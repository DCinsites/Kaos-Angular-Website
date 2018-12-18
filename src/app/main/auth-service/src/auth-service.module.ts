import { DalModule } from 'src/app/main/dal';
import { AuthService } from './auth.service';
import { NgModule } from '@angular/core';

import { SessionFlow } from 'src/app/main/session-flow/index';

/**
 * Auth service module provide methods and data to work with authentication
 */
@NgModule({
    imports: [DalModule],
    exports: [],
    declarations: [],
    providers: [AuthService, SessionFlow],
})
export class AuthServiceModule {}
