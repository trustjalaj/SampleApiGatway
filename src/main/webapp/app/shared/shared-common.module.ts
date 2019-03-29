import { NgModule } from '@angular/core';

import { ApiGatwayJhipsterSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [ApiGatwayJhipsterSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [ApiGatwayJhipsterSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class ApiGatwayJhipsterSharedCommonModule {}
