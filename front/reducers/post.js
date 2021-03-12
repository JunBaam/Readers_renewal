import produce from 'immer'

export const initialState = {
  mainPosts: [],

  addPostLoading: false,
  addPostDone: false,
  addPostError: null,

  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
  hasMorePosts: true,
}

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST'
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS'
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE'

export const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST'
export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS'
export const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE'

const reducer = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case ADD_POST_REQUEST:
        draft.addPostLoading = true
        draft.addPostDone = false
        draft.addPostError = null
        break

      case ADD_POST_SUCCESS:
        draft.addPostLoading = false
        draft.addPostDone = true
        draft.mainPosts.unshift(action.data)
        break

      case ADD_POST_FAILURE:
        draft.addPostLoading = false
        draft.addPostError = action.error
        break

      case LOAD_POSTS_REQUEST:
        draft.loadPostsLoading = true
        draft.loadPostsDone = false
        draft.loadPostsError = null
        break
      case LOAD_POSTS_SUCCESS:
        draft.loadPostsLoading = false
        draft.loadPostsDone = true
        draft.mainPosts = draft.mainPosts.concat(action.data)
        draft.hasMorePosts = action.data.length === 10
        break
      case LOAD_POSTS_FAILURE:
        draft.loadPostsLoading = false
        draft.loadPostsError = action.error
        break

      default:
        break
    }
  })
}
export default reducer
