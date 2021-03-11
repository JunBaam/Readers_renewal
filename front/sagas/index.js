import { all, fork } from 'redux-saga/effects'
import postSaga from './post'
import userSaga from './user'
import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:3065'

export default function* rootSaga() {
  // all 배열을 받는다 함수들을 한번에 실행.

  yield all([
    //   fork(postSaga),
    fork(userSaga),
  ])
}
