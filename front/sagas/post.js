import axios from 'axios'
import { all, fork, put, takeLatest, call, throttle } from 'redux-saga/effects'

import {
  ADD_POST_FAILURE,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  LOAD_POSTS_REQUEST,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_FAILURE,
  LOAD_POST_REQUEST,
  LOAD_POST_SUCCESS,
  LOAD_POST_FAILURE,
  LIKE_POST_FAILURE,
  LIKE_POST_REQUEST,
  LIKE_POST_SUCCESS,
  UNLIKE_POST_FAILURE,
  UNLIKE_POST_REQUEST,
  UNLIKE_POST_SUCCESS,
  LIKE_ONEPOST_REQUEST,
  UNLIKE_ONEPOST_REQUEST,
  UNLIKE_ONEPOST_SUCCESS,
  UNLIKE_ONEPOST_FAILURE,
  LIKE_ONEPOST_FAILURE,
  LIKE_ONEPOST_SUCCESS,
  ADD_COMMENT_FAILURE,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
} from '../reducers/post'
import { ADD_POST_TO_ME } from '../reducers/user'

function loadPostsAPI(lastId) {
  // get에 데이터를 넣으려면 쿼리스트링 사용!
  //  lastId가 undifine 이면 0으로 만듬.
  return axios.get(`/posts?lastId=${lastId || 0}`)
}

function* loadPosts(action) {
  try {
    const result = yield call(loadPostsAPI, action.lastId)
    yield put({
      type: LOAD_POSTS_SUCCESS,
      data: result.data,
    })
  } catch (err) {
    console.error(err)
    yield put({
      type: LOAD_POSTS_FAILURE,
      error: err.response.data,
    })
  }
}

function loadPostAPI(data) {
  return axios.get(`/post/${data}`)
}

function* loadPost(action) {
  try {
    const result = yield call(loadPostAPI, action.data)
    yield put({
      type: LOAD_POST_SUCCESS,
      data: result.data,
    })
  } catch (err) {
    console.error(err)
    yield put({
      type: LOAD_POST_FAILURE,
      data: err.response.data,
    })
  }
}

function addPostAPI(data) {
  return axios.post('/post', data, { withCredentials: true })
}
function* addPost(action) {
  try {
    const result = yield call(addPostAPI, action.data)
    yield put({
      type: ADD_POST_SUCCESS,
      data: result.data,
    })
    yield put({
      type: ADD_POST_TO_ME,
      data: result.data.id,
    })
  } catch (err) {
    console.error(err)
    yield put({
      type: ADD_POST_FAILURE,
      data: err.response.data,
    })
  }
}

function likePostAPI(data) {
  return axios.patch(`/post/${data}/like`)
}

function* likePost(action) {
  try {
    const result = yield call(likePostAPI, action.data)
    yield put({
      type: LIKE_POST_SUCCESS,
      data: result.data,
    })
  } catch (err) {
    console.error(err)
    yield put({
      type: LIKE_POST_FAILURE,
      error: err.response.data,
    })
  }
}

function unlikePostAPI(data) {
  return axios.delete(`/post/${data}/like`)
}

function* unlikePost(action) {
  try {
    const result = yield call(unlikePostAPI, action.data)
    yield put({
      type: UNLIKE_POST_SUCCESS,
      data: result.data,
    })
  } catch (err) {
    console.error(err)
    yield put({
      type: UNLIKE_POST_FAILURE,
      error: err.response.data,
    })
  }
}

function likeOnePostAPI(data) {
  return axios.patch(`/post/${data}/like`)
}

function* likeOnePost(action) {
  try {
    const result = yield call(likeOnePostAPI, action.data)
    yield put({
      type: LIKE_ONEPOST_SUCCESS,
      data: result.data,
    })
  } catch (err) {
    console.error(err)
    yield put({
      type: LIKE_ONEPOST_FAILURE,
      error: err.response.data,
    })
  }
}

function unlikeOnePostAPI(data) {
  return axios.delete(`/post/${data}/like`)
}

function* unlikeOnePost(action) {
  try {
    const result = yield call(unlikeOnePostAPI, action.data)
    yield put({
      type: UNLIKE_ONEPOST_SUCCESS,
      data: result.data,
    })
  } catch (err) {
    console.error(err)
    yield put({
      type: UNLIKE_ONEPOST_FAILURE,
      error: err.response.data,
    })
  }
}

function addCommentAPI(data) {
  return axios.post(`/post/${data.postId}/comment`, data)
}

function* addComment(action) {
  try {
    const result = yield call(addCommentAPI, action.data)
    yield put({
      type: ADD_COMMENT_SUCCESS,
      data: result.data,
    })
  } catch (err) {
    console.error(err)
    yield put({
      type: ADD_COMMENT_FAILURE,
      data: err.response.data,
    })
  }
}

function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost)
}
function* watchLoadPosts() {
  yield throttle(4000, LOAD_POSTS_REQUEST, loadPosts)
}

function* watchLoadPost() {
  yield takeLatest(LOAD_POST_REQUEST, loadPost)
}

function* watchLikePost() {
  yield takeLatest(LIKE_POST_REQUEST, likePost)
}

function* watchUnlikePost() {
  yield takeLatest(UNLIKE_POST_REQUEST, unlikePost)
}

function* watchLikeOnePost() {
  yield takeLatest(LIKE_ONEPOST_REQUEST, likeOnePost)
}

function* watchUnlikeOnePost() {
  yield takeLatest(UNLIKE_ONEPOST_REQUEST, unlikeOnePost)
}

function* watchAddComment() {
  yield takeLatest(ADD_COMMENT_REQUEST, addComment)
}

export default function* postSaga() {
  yield all([
    fork(watchAddPost),
    fork(watchLoadPosts),
    fork(watchLoadPost),
    fork(watchLikePost),
    fork(watchUnlikePost),
    fork(watchLikeOnePost),
    fork(watchUnlikeOnePost),
    fork(watchAddComment),
  ])
}
