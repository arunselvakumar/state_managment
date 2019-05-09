import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import {select, Store} from '@ngrx/store';
import {AppState} from './state/app.state';
import {AddComment} from './state/app.actions';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public comments$: Observable<any>;

  constructor(private store: Store<AppState>) {

    this.comments$ = store.pipe(select('comment'), map((appState: any) => appState.comments));
  }


  onSubmit(form: NgForm) {
    const data = form.value;
    if (data) {
      this.store.dispatch(new AddComment({ id: new Date().getMilliseconds().toString(), comment: data.comment, name: data.name }));
    }
  }
}
