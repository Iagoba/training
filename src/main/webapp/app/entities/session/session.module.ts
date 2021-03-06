import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TrainingSharedModule } from 'app/shared';
import {
  SessionComponent,
  SessionDetailComponent,
  SessionUpdateComponent,
  SessionDeletePopupComponent,
  SessionDeleteDialogComponent,
  sessionRoute,
  sessionPopupRoute
} from './';

import { AccordionModule, RatingModule, CalendarModule, ButtonModule } from 'primeng/primeng';

const ENTITY_STATES = [...sessionRoute, ...sessionPopupRoute];

@NgModule({
  imports: [TrainingSharedModule, RouterModule.forChild(ENTITY_STATES),
    AccordionModule,
    RatingModule,
    CalendarModule,
    ButtonModule
  ],
  declarations: [
    SessionComponent,
    SessionDetailComponent,
    SessionUpdateComponent,
    SessionDeleteDialogComponent,
    SessionDeletePopupComponent
  ],
  entryComponents: [SessionComponent, SessionUpdateComponent, SessionDeleteDialogComponent, SessionDeletePopupComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TrainingSessionModule {}
