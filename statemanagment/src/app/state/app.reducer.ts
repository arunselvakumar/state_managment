import {AppState} from './app.state';
import {initialAppState} from './app.state';
import {CommentActions, CommentActionTypes} from './app.actions';

export function projectsReducers(state = initialAppState, action: CommentActions): AppState {
  switch (action.type) {
    case CommentActionTypes.AddComment: {
      return {
        selectedComment: null,
        comments: addComment(state.comments, action.payload)
      };
    }
    case CommentActionTypes.SelectComment: {
      return state;
    }
    default:
      return state;
  }
}

const addComment = (comments, comment) => [...comments, comment];


