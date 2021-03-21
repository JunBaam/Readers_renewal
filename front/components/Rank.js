import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

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
    width: 220px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  :hover {
    text-decoration: underline solid black;
  }
`
const Rank = ({ likeCount }) => {
  return (
    <>
      {likeCount.slice(0, 6).map((data, index) => (
        <Link href="/review/[id]" as={`/review/${data.id}`}>
          <RankWrapper key={index}>
            <div>{index + 1}</div>
            <RankText>
              <div>{data.title} </div>
              <span>🟊</span>
              {data.rating} | 좋아요 {data.LikeCount}개 | {data.category}
            </RankText>
            <img src={data.image_url} alt={data.title} />
          </RankWrapper>
        </Link>
      ))}
    </>
  )
}

export default Rank
