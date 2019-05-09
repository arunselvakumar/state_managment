import {Action} from '@ngrx/store';
import {CommentModel} from '../models/comment.model';

export enum CommentActionTypes {
  AddComment = '[Add Comment] Add Feedback Comment',
  SelectComment = '[Select Comment] Select Feedback Comment'
}

export class AddComment implements Action {
  readonly type = CommentActionTypes.AddComment;

  constructor(public payload: CommentModel) {

  }
}

export class SelectComment implements Action {
  readonly type = CommentActionTypes.SelectComment;

  constructor(public payload: string) {
  }

}

export type CommentActions = AddComment | SelectComment;
