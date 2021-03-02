import React from 'react'
import Button from '../components/Button'

import dummyData from './Slider/sliderData'

import styled from 'styled-components'

const PostTitle = styled.div`
  border: 1px solid black;
`

const PostCardWrapper = styled.div`
  padding: 10px;
  cursor: pointer;

  & > img {
    object-fit: fill;
    width: 175px;
    height: 160px;
    border: 1px solid #ffd5b4;
    border-radius: 5px;
  }
  & > div:hover {
    text-decoration: underline solid black;
    transition: all 0.7s ease-in;
  }
  & > div h3 {
    margin: 0;
    font-size: 16px;
    font-weight: 500;
  }

  & > div h5 {
    margin: 0;
    font-weight: 500;
    font-size: 11px;
    color: #a19f9e;
  }
`

const PostCard = () => {
  return (
    <>
      {dummyData.map((data, index) => (
        <PostCardWrapper key={index}>
          <img src={data.urls} alt="" />
          <div>
            <h3>{data.title}</h3>

            <h5>
              {data.category} | {data.category}
            </h5>
          </div>
        </PostCardWrapper>
      ))}

      <Button btnName={'리뷰 더보기'} />
    </>
  )
}

export default PostCard
