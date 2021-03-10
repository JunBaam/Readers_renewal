import styled from 'styled-components'

export const ReviewWriteFormWrapper = styled.div`
  width: 850px;
  margin: 0 auto;
`

//검색한 책정보
export const SearchbookInfo = styled.div`
  border: 1px solid #d9d9d9;
  display: flex;
  position: relative;
  justify-content: space-between;
  min-height: 400px;

  & > div img {
    width: 270px;
    height: 320px;
    position: absolute;
    top: -5%;
    left: -2%;
    border: 1px solid #d9d9d9;
  }
`
export const SearchBookText = styled.div`
  flex: 0 0 68%;
  padding: 15px 10px 5px 20px;
  width: 570px;

  & > p {
    font-size: 25px;
    font-weight: bold;
    margin: 0 0 15px 0;
  }
  & > h5 {
    margin: 0 0 3px 0;
    line-height: 23px;
    font-size: 16px;
    font-weight: 700;
    color: #6d6d6d;

    padding: 0 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  & > h3 {
    margin: 5px 0 5px 0;
  }
  & > div {
    font-size: 17px;
    color: #6d6d6d;
    font-weight: 600;
    padding: 0 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 50px;
  }
`

// 리뷰작성폼
export const ReviewWriteWapper = styled.div`
  margin-top: 10px;
  padding-top: 10px;

  border: 1px solid #d9d9d9;

  & > p {
    font-size: 20px;
    font-weight: 700;
    margin: 10px 0 0px 20px;
  }
`
// 카테고리 목록
export const ReviewCategory = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 10px 10px 10px;
  font-weight: 600;
  font-size: 17px;
  margin-top: 20px;
`

// 후기내용
export const ReviewInput = styled.div`
  margin: 10px 0 10px 20px;

  & > textarea {
    width: 80%;
    height: 200px;
    font-size: 16px;
    font-weight: 700;
    resize: none;
    padding: 0.8em 1em;
  }
`
export const ButtonPosition = styled.div`
  margin: 0 0 20px 30%;
`
