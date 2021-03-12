import axios from 'axios'
import { all, fork, put, takeLatest, call, throttle } from 'redux-saga/effects'

import {
  ADD_POST_FAILURE,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  LOAD_POSTS_REQUEST,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_FAILURE,
} from '../reducers/post'
import { ADD_POST_TO_ME } from '../reducers/user'

function loadPostsAPI(data) {
  return axios.get('/posts', data)
}

function* loadPosts(action) {
  try {
    const result = yield call(loadPostsAPI, action.data)
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

function* watchLoadPosts() {
  yield throttle(4000, LOAD_POSTS_REQUEST, loadPosts)
}
function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost)
}

export default function* postSaga() {
  yield all([fork(watchAddPost), fork(watchLoadPosts)])
}
