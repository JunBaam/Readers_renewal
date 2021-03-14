import styled from 'styled-components'
import { AiOutlineHeart, AiTwotoneHeart } from 'react-icons/ai'

export const ReviewListContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  width: 300px;
  margin: 0 10px 20px 10px;
  cursor: pointer;
  border-radius: 7px;
  position: relative;
  background-color: white;

  & > img {
    width: 210px;
    height: 230px;
    margin: 10px auto;
    border-radius: 5px;

    border: 1px solid #d9d9d9;
  }
  & > img:hover {
    transition: all 0.3s ease-in-out;
    transform: scale(1.04);
  }
`
export const ReviewContent = styled.div`
  font-size: 13px;
  color: #a19f9e;
  cursor: pointer;
  margin: 10px 10px 0px 20px;

  & > p {
    color: black;
    margin-top: 5px;
    font-size: 14px;

    display: -webkit-box;
    word-wrap: break-word;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`
export const ReviewTitle = styled.span`
  display: flex;
  justify-content: space-between;
  color: black;
  font-size: 18px;

  & > h4 {
    font-weight: 500;
    margin: 0;
    width: 260px;
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
    font-size: 20px;
    font-weight: bold;
  }
  & > p span {
    margin: 0;

    color: black;
    font-weight: 300;
    margin-left: 5px;
  }
`

export const HeartIcon = styled.div`
  font-size: 30px;
  position: absolute;
  right: 2%;
  top: 1%;
  z-index: 9;
  height: 40px;
  width: 40px;
  margin: 0 auto;
  text-align: center;

  :hover {
    background-color: #e8e8e8;
    border-radius: 100%;
  }
`
