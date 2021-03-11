import produce from 'immer'
const dummyUser = {
  id: 1,
  nickname: '제로초',
  Posts: [],
  Followings: [],
  Followers: [],
}

export const initialState = {
  logInLoading: false, // 로그인 시도중
  logInDone: false,
  logInError: null,
  logOutLoading: false, // 로그아웃 시도중
  logOutDone: false,
  logOutError: null,
  signUpLoading: false, // 회원가입 시도중
  signUpDone: false,
  signUpError: null,
  isLoggedIn: false,
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

export const loginRequestAction = data => ({
  type: LOG_IN_REQUEST,
  data,
})

export const logoutRequestAction = () => ({
  type: LOG_OUT_REQUEST,
})

export const signUpAction = data => {
  return {
    type: SIGN_UP,
    data,
  }
}

// export const signUpSuccess = {
//   type: SIGN_UP_SUCCESS,
// }

// export const loginAction = data => {
//   return {
//     type: LOG_IN,
//     data,
//   }
// }
// export const logoutAction = () => ({
//   type: LOG_OUT,
// })
// export const signUp = data => {
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

      default:
        break
    }
  })
}

export default reducer
