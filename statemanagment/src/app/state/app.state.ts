import {CommentModel} from '../models/comment.model';

export interface AppState {
  comments: CommentModel[];
  selectedComment: string | null;
}

export const initialAppState: AppState = { comments: [], selectedComment: null };
