import styled from 'styled-components'
import { AiOutlineHeart, AiTwotoneHeart } from 'react-icons/ai'

export const ReviewListContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 450px;
  width: 300px;
  margin: 0 10px 20px 10px;
  cursor: pointer;
  border: 1px solid #d9d9d9;
  border-radius: 7px;
  position: relative;

  & > img {
    width: 226px;
    height: 300px;
    margin: 0 auto;
    border-radius: 5px;
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
  margin: 10px 0px 0px 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  & > div {
    color: black;
    font-size: 20px;
    font-weight: 700;
  }

  & > div:hover {
    text-decoration: underline;
  }

  & > p {
    color: black;
    margin-top: 5px;
    font-size: 14px;
    line-height: 24px;
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
