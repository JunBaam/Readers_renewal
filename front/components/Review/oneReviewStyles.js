import styled from 'styled-components'

export const ReviewWriteFormWrapper = styled.form`
  width: 850px;
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
`
//검색한 책정보
export const SearchbookInfo = styled.div`
  height: 700px;
  text-align: center;
  padding: 10px 10px 10px 10px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);

  & > img {
    width: 220px;
    height: 250px;
    border: 1px solid #d9d9d9;
  }
`
export const SearchBookText = styled.div`
  text-align: left;
  width: 400px;

  & > p {
    font-size: 20px;
    font-weight: bold;
    margin: 0 0 5px 0;
    display: -webkit-box;
    word-wrap: break-word;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  & > h5 {
    margin: 0;
    line-height: 23px;
    font-size: 13px;
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
    font-size: 15px;
    color: #6d6d6d;
    font-weight: 600;
    padding: 0 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 50px;
  }
`

// 사용자리뷰 오른쪽
export const UserReviewWrapper = styled.div`
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  padding: 10px 10px 10px 20px;
  background-color: white;
  border-radius: 10px;
  width: 400px;
  height: 100%;
  margin-top: 5vh;

  & > p {
    font-size: 22px;
    font-weight: 500;
    margin: 0 0 0 10px;
  }

  & > p span {
    color: #ff9e7d;
    font-weight: bold;
    font-size: 15px;
    margin: 20px 0 0px 20px;
  }
`

export const UserReviewContent = styled.div`
  margin: 15px 20px 0px 10px;

  & > div {
    pointer-events: none;
  }
  & > p {
    font-size: 16px;
    color: #6d6d6d;
    font-weight: 600;
    margin: 0;
    line-height: normal;
  }
  & > span {
    font-size: 13px;
    font-weight: 600;
    color: #6d6d6d;
    margin: 0;
  }
`
export const HeartIcon = styled.span`
  font-size: 30px;
  margin-left: 5px;
  cursor: pointer;
`
export const ReplyIcon = styled.span`
  font-size: 30px;
  margin-left: 15px;
  cursor: pointer;
`
export const EllipsisIcon = styled.span`
  cursor: pointer;
  margin-left: 15px;
`

export const UpdateDeleteWarpper = styled.span`
  margin-left: 10px;

  & > span {
    cursor: pointer;
    font-size: 15px;
    font-weight: 600;
  }
`
