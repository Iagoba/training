import { Component, OnInit } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ISession, Session } from 'app/shared/model/session.model';
import { SessionService } from './session.service';

@Component({
  selector: 'jhi-session-update',
  templateUrl: './session-update.component.html'
})
export class SessionUpdateComponent implements OnInit {
  session: ISession;
  isSaving: boolean;

  editForm = this.fb.group({
    id: [],
    type: [],
    desc: []
  });

  constructor(protected sessionService: SessionService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ session }) => {
      this.updateForm(session);
      this.session = session;
    });
  }

  updateForm(session: ISession) {
    this.editForm.patchValue({
      id: session.id,
      type: session.type,
      desc: session.desc
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    const session = this.createFromForm();
    if (session.id !== undefined) {
      this.subscribeToSaveResponse(this.sessionService.update(session));
    } else {
      this.subscribeToSaveResponse(this.sessionService.create(session));
    }
  }

  private createFromForm(): ISession {
    const entity = {
      ...new Session(),
      id: this.editForm.get(['id']).value,
      type: this.editForm.get(['type']).value,
      desc: this.editForm.get(['desc']).value
    };
    return entity;
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ISession>>) {
    result.subscribe((res: HttpResponse<ISession>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
  }

  protected onSaveSuccess() {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError() {
    this.isSaving = false;
  }
}
