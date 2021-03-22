import { all, fork } from 'redux-saga/effects'
import postSaga from './post'
import userSaga from './user'
import axios from 'axios'
import { backUrl } from '../config/config'

// 쿠키를 전송
axios.defaults.withCredentials = true
axios.defaults.baseURL = backUrl

export default function* rootSaga() {
  yield all([fork(postSaga), fork(userSaga)])
}
