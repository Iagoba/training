import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TrainingSharedLibsModule, TrainingSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [TrainingSharedLibsModule, TrainingSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [TrainingSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TrainingSharedModule {
  static forRoot() {
    return {
      ngModule: TrainingSharedModule
    };
  }
}
