import styled from 'styled-components'

export const MypageWrapper = styled.div`
  width: 900px;
  border-radius: 10px;
  margin: 10px auto;
  margin-bottom: 50px;

  & > p {
    font-size: 21px;
    color: #a19f9e;
    padding-bottom: 20px;
  }
  & > p span {
    margin-left: 25px;
  }
`

export const ReviewTab = styled.div`
  width: 180px;
  width: 180px;
  padding: 5px 5px 5px 5px;
  display: inline-block;
  border-radius: 10px;
  text-align: center;
  border: 0.5px solid #edebe8;
  margin: 10px 20px;
  background-color: white;

  & > img {
    cursor: pointer;
    width: 100px;
    height: 155px;
    border: 1px solid #d9d9d9;
  }

  & > img:hover {
    transition: all 0.3s ease-in-out;
    transform: scale(1.12);
  }

  & > div {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`
export const ReviewTitle = styled.span`
  display: flex;
  justify-content: space-between;
  color: black;
  font-size: 17px;

  & > h4 {
    font-weight: 500;
    margin: 0;
    width: 180px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  h4:hover {
    text-decoration: underline;
  }
  & > p {
    margin: 0;
    color: orange;
    font-size: 17px;
    font-weight: bold;
  }
  & > p span {
    margin: 0;
    color: black;
    font-weight: 300;
    margin-left: 5px;
  }
`
export const ReviewContent = styled.div`
  font-size: 12px;
  width: 180px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #a19f9e;
`
export const MypageTabWrapper = styled.div`
  background-color: black;
`
