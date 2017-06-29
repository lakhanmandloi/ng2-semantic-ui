import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SuiModalService } from "./services/modal.service";
import { SuiModal } from "./components/modal";

@NgModule({
    imports: [
        CommonModule,
        SuiDimmerModule,
        SuiTransitionModule
    ],
    declarations: [
        SuiModal
    ],
    exports: [
        SuiModal
    ],
    providers: [
        SuiModalService
    ],
    entryComponents: [
        SuiModal
    ]
})
export class SuiModalModule {}
