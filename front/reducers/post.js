import produce from 'immer'

export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: '아침밥',
      },
      author: '저자',
      publish: '출판사',
      content: '첫 번째 게시글',
      Images: [
        {
          src:
            'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
        },
        {
          src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg',
        },
        {
          src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg',
        },
      ],
      Comments: [
        {
          User: {
            nickname: 'nero',
          },
          content: '우와 개정판이 나왔군요~',
        },
        {
          User: {
            nickname: 'hero',
          },
          content: '얼른 사고싶어요~',
        },
      ],
    },
    {
      id: 1,
      User: {
        id: 1,
        nickname: '아침밥',
      },
      author: '저자',
      publish: '출판사',
      content: '첫 번째 게시글',
      Images: [
        {
          src:
            'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
        },
        {
          src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg',
        },
        {
          src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg',
        },
      ],
      Comments: [
        {
          User: {
            nickname: 'nero',
          },
          content: '우와 개정판이 나왔군요~',
        },
        {
          User: {
            nickname: 'hero',
          },
          content: '얼른 사고싶어요~',
        },
      ],
    },
    {
      id: 1,
      User: {
        id: 1,
        nickname: '아침밥',
      },
      author: '저자',
      publish: '출판사',
      content: '첫 번째 게시글',
      Images: [
        {
          src:
            'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
        },
        {
          src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg',
        },
        {
          src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg',
        },
      ],
      Comments: [
        {
          User: {
            nickname: 'nero',
          },
          content: '우와 개정판이 나왔군요~',
        },
        {
          User: {
            nickname: 'hero',
          },
          content: '얼른 사고싶어요~',
        },
      ],
    },
    {
      id: 1,
      User: {
        id: 1,
        nickname: '아침밥',
      },
      author: '저자',
      publish: '출판사',
      content: '첫 번째 게시글',
      Images: [
        {
          src:
            'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
        },
        {
          src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg',
        },
        {
          src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg',
        },
      ],
      Comments: [
        {
          User: {
            nickname: 'nero',
          },
          content: '우와 개정판이 나왔군요~',
        },
        {
          User: {
            nickname: 'hero',
          },
          content: '얼른 사고싶어요~',
        },
      ],
    },
    {
      id: 1,
      User: {
        id: 1,
        nickname: '아침밥',
      },
      author: '저자',
      publish: '출판사',
      content: '첫 번째 게시글',
      Images: [
        {
          src:
            'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
        },
        {
          src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg',
        },
        {
          src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg',
        },
      ],
      Comments: [
        {
          User: {
            nickname: 'nero',
          },
          content: '우와 개정판이 나왔군요~',
        },
        {
          User: {
            nickname: 'hero',
          },
          content: '얼른 사고싶어요~',
        },
      ],
    },
  ],
  // imagePaths: [],
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
}

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST'
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS'
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE'

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

      default:
        break
    }
  })
}
export default reducer
