import React from 'react'
import styled from 'styled-components'
import dummyData from './Slider/sliderData'

const RankWrapper = styled.div`
  display: flex;
  line-height: 20px;
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 10px;
  margin-left: 40px;

  justify-content: space-between;
  & > div {
    line-height: 28px;
    font-size: 21px;
    height: 60px;
    font-weight: bold;
  }

  & > img {
    cursor: pointer;
    object-fit: fill;
    height: 70px;
    width: 95px;
    border: 1px solid #ffd5b4;
    border-radius: 5px;
  }
`
const RankText = styled.span`
  font-size: 13px;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #a19f9e;
  cursor: pointer;

  & > span {
    display: inline;
    color: orange;
    font-weight: bold;
    margin: 0;
  }
  & > div {
    line-height: 20px;
    font-size: 15px;
    color: black;
    margin-bottom: 3px;
  }
  :hover {
    text-decoration: underline solid black;
  }
`
const Rank = () => {
  return (
    <>
      {dummyData.map((data, index) => (
        <RankWrapper key={index}>
          <div>{index + 1}</div>

          <RankText>
            <div>{data.title} </div>
            <span>🟊</span>
            {data.rating} | 좋아요 {data.like}개 | {data.category}
          </RankText>
          <img src={data.urls} alt="" />
        </RankWrapper>
      ))}
    </>
  )
}

export default Rank
