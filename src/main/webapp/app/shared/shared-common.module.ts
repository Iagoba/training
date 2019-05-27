import { NgModule } from '@angular/core';

import { TrainingSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [TrainingSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [TrainingSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class TrainingSharedCommonModule {}
