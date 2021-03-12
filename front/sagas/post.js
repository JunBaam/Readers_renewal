import axios from 'axios'
import { all, fork, put, takeLatest, call } from 'redux-saga/effects'

import {
  ADD_POST_FAILURE,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
} from '../reducers/post'
import { ADD_POST_TO_ME } from '../reducers/user'

function addPostAPI(data) {
  return axios.post('/post', data, { withCredentials: true })
}
function* addPost(action) {
  try {
    console.log('액션값', action)
    const result = yield call(addPostAPI, action.data)
    console.log('결과', result)
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

function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost)
}

export default function* postSaga() {
  yield all([fork(watchAddPost)])
}
