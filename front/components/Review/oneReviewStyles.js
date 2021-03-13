import styled from 'styled-components'

export const ReviewWriteFormWrapper = styled.form`
  width: 850px;
  margin: 0 auto;
  margin-top: 50px;
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

// 사용자리뷰
export const UserReviewWrapper = styled.div`
  margin-top: 10px;
  padding-top: 10px;

  border: 1px solid #d9d9d9;

  & > p {
    font-size: 20px;
    font-weight: 700;
    margin: 10px 0 0px 20px;
  }
`
