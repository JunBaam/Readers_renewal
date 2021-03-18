import produce from 'immer'

export const initialState = {
  mainPosts: [],
  onePost: null,
  addPostLoading: false, //게시글추가
  addPostDone: false,
  addPostError: null,
  removePostLoading: false, // 게시글 삭제
  removePostDone: false,
  removePostError: null,
  updatePostLoading: false, // 게시글 수정
  updatePostDone: false,
  updatePostError: null,
  loadPostsLoading: false, //게시물 여러개 불러오기
  loadPostsDone: false,
  loadPostsError: null,
  hasMorePosts: true, //게시물 추가로 불러오기
  loadPostLoading: false, //단일 게시물 불러오기
  loadPostDone: false,
  loadPostError: null,
  likePostLoading: false, //좋아요
  likePostDone: false,
  likePostError: null,
  unlikePostLoading: false, //좋아요취소
  unlikePostDone: false,
  unlikePostError: null,
  addCommentLoading: false, // 댓글추가
  addCommentDone: false,
  addCommentError: null,
}

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST'
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS'
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE'

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST'
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS'
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE'

export const UPDATE_POST_REQUEST = 'UPDATE_POST_REQUEST'
export const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS'
export const UPDATE_POST_FAILURE = 'UPDATE_POST_FAILURE'

export const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST'
export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS'
export const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE'

export const LOAD_POST_REQUEST = 'LOAD_POST_REQUEST'
export const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS'
export const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE'

export const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST'
export const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS'
export const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE'

export const UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST'
export const UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS'
export const UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE'

export const LIKE_ONEPOST_REQUEST = 'LIKE_ONEPOST_REQUEST'
export const LIKE_ONEPOST_SUCCESS = 'LIKE_ONEPOST_SUCCESS'
export const LIKE_ONEPOST_FAILURE = 'LIKE_ONEPOST_FAILURE'

export const UNLIKE_ONEPOST_REQUEST = 'UNLIKE_ONEPOST_REQUEST'
export const UNLIKE_ONEPOST_SUCCESS = 'UNLIKE_ONEPOST_SUCCESS'
export const UNLIKE_ONEPOST_FAILURE = 'UNLIKE_ONEPOST_FAILURE'

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST'
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS'
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE'

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
        console.log('addPost ', action.data)
        draft.mainPosts.unshift(action.data)
        break

      case ADD_POST_FAILURE:
        draft.addPostLoading = false
        draft.addPostError = action.error
        break

      case REMOVE_POST_REQUEST:
        draft.removePostLoading = true
        draft.removePostDone = false
        draft.removePostError = null
        break
      case REMOVE_POST_SUCCESS:
        draft.removePostLoading = false
        draft.removePostDone = true
        draft.mainPosts = draft.mainPosts.filter(
          v => v.id !== action.data.PostId
        )
        break
      case REMOVE_POST_FAILURE:
        draft.removePostLoading = false
        draft.removePostError = action.error
        break

      case UPDATE_POST_REQUEST:
        draft.updatePostLoading = true
        draft.updatePostDone = false
        draft.updatePostError = null

        break
      case UPDATE_POST_SUCCESS:
        draft.updatePostLoading = false
        draft.updatePostDone = true
        draft.onePost.content = action.data.content
        draft.onePost.category = action.data.category
        draft.onePost.rating = action.data.rating
        console.log('리듀서값', action.data)

        break

      case UPDATE_POST_FAILURE:
        draft.updatePostLoading = false
        draft.updatePostError = action.error
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

      case LOAD_POST_REQUEST:
        draft.loadPostLoading = true
        draft.loadPostDone = false
        draft.loadPostError = null
        break
      case LOAD_POST_SUCCESS:
        draft.loadPostLoading = false
        draft.loadPostDone = true
        draft.onePost = action.data
        break
      case LOAD_POST_FAILURE:
        draft.loadPostLoading = false
        draft.loadPostError = action.error
        break

      case LIKE_POST_REQUEST:
        draft.likePostLoading = true
        draft.likePostDone = false
        draft.likePostError = null
        break
      case LIKE_POST_SUCCESS: {
        const post = draft.mainPosts.find(v => v.id === action.data.PostId)
        post.Likers.push({ id: action.data.UserId })
        draft.likePostLoading = false
        draft.likePostDone = true
        break
      }
      case LIKE_POST_FAILURE:
        draft.likePostLoading = false
        draft.likePostError = action.error
        break

      case UNLIKE_POST_REQUEST:
        draft.unlikePostLoading = true
        draft.unlikePostDone = false
        draft.unlikePostError = null
        break
      case UNLIKE_POST_SUCCESS: {
        const post = draft.mainPosts.find(v => v.id === action.data.PostId)
        post.Likers = post.Likers.filter(v => v.id !== action.data.UserId)
        draft.unlikePostLoading = false
        draft.unlikePostDone = true
        break
      }
      case UNLIKE_POST_FAILURE:
        draft.unlikePostLoading = false
        draft.unlikePostError = action.error
        break

      case LIKE_ONEPOST_REQUEST:
        draft.likePostLoading = true
        draft.likePostDone = false
        draft.likePostError = null
        break
      case LIKE_ONEPOST_SUCCESS: {
        draft.onePost.Likers.push({ id: action.data.UserId })
        draft.likePostLoading = false
        draft.likePostDone = true
        break
      }
      case LIKE_ONEPOST_FAILURE:
        draft.likePostLoading = false
        draft.likePostError = action.error
        break

      case UNLIKE_ONEPOST_REQUEST:
        draft.unlikePostLoading = true
        draft.unlikePostDone = false
        draft.unlikePostError = null
        break
      case UNLIKE_ONEPOST_SUCCESS: {
        draft.onePost.Likers.pop(action.data.UserId)
        draft.unlikePostLoading = false
        draft.unlikePostDone = true
        break
      }
      case UNLIKE_ONEPOST_FAILURE:
        draft.unlikePostLoading = false
        draft.unlikePostError = action.error
        break

      case ADD_COMMENT_REQUEST:
        draft.addCommentLoading = true
        draft.addCommentDone = false
        draft.addCommentError = null
        break
      case ADD_COMMENT_SUCCESS: {
        draft.onePost.Comments.unshift(action.data)
        draft.addCommentLoading = false
        draft.addCommentDone = true
        break
      }
      case ADD_COMMENT_FAILURE:
        draft.addCommentLoading = false
        draft.addCommentError = action.error
        break

      default:
        break
    }
  })
}
export default reducer
