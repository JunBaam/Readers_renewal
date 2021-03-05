import React from 'react'
import Button from '../components/Button'

import dummyData from './Slider/sliderData'

import styled from 'styled-components'
import Link from 'next/link'

const PostTitle = styled.div`
  border: 1px solid black;
`

const PostCardWrapper = styled.div`
  cursor: pointer;
  padding: 10px;

  & > img {
    object-fit: fill;
    width: 160px;
    height: 140px;
    border-radius: 5px;
    border: 1px solid #ffd5b4;
  }
  & > img:hover {
    transition: all 0.3s ease-in-out;
    transform: scale(1.12);
  }
  & > div h3 {
    margin: 0;
    font-size: 16px;
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & > div h5 {
    margin: 0;
    font-weight: 500;
    font-size: 11px;
    color: #a19f9e;
  }
`
const StarWrapper = styled.span`
  font-weight: 300;
  line-height: 5px;

  & > p {
    display: inline;
    font-size: 17px;
    margin-left: 3px;
  }

  & > span {
    color: orange;
    font-weight: bold;
    padding-top: 50px;
    font-size: 20px;
  }
`

const PostCard = () => {
  return (
    <>
      {dummyData.map((data, index) => (
        <PostCardWrapper key={index}>
          <img src={data.urls} alt="" />
          <div>
            <h3>
              {data.title}
              <StarWrapper>
                <span>🟊</span>
                <p>{data.rating}</p>
              </StarWrapper>
            </h3>

            <h5>
              {data.category} | {data.category}
            </h5>
          </div>
        </PostCardWrapper>
      ))}

      <Link href="/reviewList">
        <a>
          <Button size="mid">리뷰 더보기</Button>
        </a>
      </Link>
    </>
  )
}

export default PostCard
