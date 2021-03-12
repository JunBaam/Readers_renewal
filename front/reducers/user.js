import produce from 'immer'

export const initialState = {
  logInLoading: false, // 로그인
  logInDone: false,
  logInError: null,
  logOutLoading: false, // 로그아웃
  logOutDone: false,
  logOutError: null,
  signUpLoading: false, // 회원가입
  signUpDone: false,
  signUpError: null,
  loadMyInfoLoading: false, // 로그인한 사용자 정보
  loadMyInfoDone: false,
  loadMyInfoError: null,
  me: null, // 로그인한 유저
}

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST'
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE'

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST'
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS'
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE'

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST'
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS'
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE'

export const LOAD_MY_INFO_REQUEST = 'LOAD_MY_INFO_REQUEST'
export const LOAD_MY_INFO_SUCCESS = 'LOAD_MY_INFO_SUCCESS'
export const LOAD_MY_INFO_FAILURE = 'LOAD_MY_INFO_FAILURE'

// 유저 리듀서의 상태를 바꾸는 액션.
export const ADD_POST_TO_ME = 'ADD_POST_TO_ME'

export const loginRequestAction = data => ({
  type: LOG_IN_REQUEST,
  data,
})

export const logoutRequestAction = () => ({
  type: LOG_OUT_REQUEST,
})

// export const signUpAction = data => {
//   return {
//     type: SIGN_UP,
//     data,
//   }
// }

const reducer = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      // 로그인
      case LOG_IN_REQUEST:
        draft.logInLoading = true
        draft.logInError = null
        draft.logInDone = false
        break
      case LOG_IN_SUCCESS:
        draft.logInLoading = false
        draft.me = action.data
        draft.logInDone = true
        break
      case LOG_IN_FAILURE:
        draft.logInLoading = false
        draft.logInError = action.error
        break

      // 로그아웃
      case LOG_OUT_REQUEST:
        draft.logOutLoading = true
        draft.logOutError = null
        draft.logOutDone = false
        break
      case LOG_OUT_SUCCESS:
        draft.logOutLoading = false
        draft.logOutDone = true
        draft.me = null
        break
      case LOG_OUT_FAILURE:
        draft.logOutLoading = false
        draft.logOutError = action.error
        break

      // 회원가입
      case SIGN_UP_REQUEST:
        draft.signUpLoading = true
        draft.signUpError = null
        draft.signUpDone = false
        break
      case SIGN_UP_SUCCESS:
        draft.signUpLoading = false
        draft.signUpDone = true
        break
      case SIGN_UP_FAILURE:
        draft.signUpLoading = false
        draft.signUpError = action.error
        break

      // 내정보 요청
      case LOAD_MY_INFO_REQUEST:
        draft.loadMyInfoLoading = true
        draft.loadMyInfoError = null
        draft.loadMyInfoDone = false
        break
      case LOAD_MY_INFO_SUCCESS:
        draft.loadMyInfoLoading = false
        draft.me = action.data
        draft.loadMyInfoDone = true
        break
      case LOAD_MY_INFO_FAILURE:
        draft.loadMyInfoLoading = false
        draft.loadMyInfoError = action.error
        break

      case ADD_POST_TO_ME:
        draft.me.Posts.unshift({ id: action.data })
        break
      default:
        break
    }
  })
}

export default reducer
