import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// import {CoreModule} from "../core/core.module";
import {RouterModule} from "@angular/router";
import { FormErrorMsgComponent } from './components/form-error-msg/form-error-msg.component';


@NgModule({
    imports:      [
        CommonModule,
        // CoreModule,
        RouterModule
    ],
    declarations: [
        // IcheckDirective,
        FormErrorMsgComponent,
        // NoDataMsgComponent,
        // PageSizeSelectorComponent,
        // DatatableComponent
    ],
    exports:      [
        FormErrorMsgComponent,
        // NoDataMsgComponent,
        // PageSizeSelectorComponent,
        // DatatableComponent
    ]
})
export class SharedModule {
}
