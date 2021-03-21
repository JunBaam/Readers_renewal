import React from 'react'
import Button from '../components/Button'
import styled from 'styled-components'
import Link from 'next/link'
import { useSelector } from 'react-redux'

const PostCardWrapper = styled.div`
  cursor: pointer;
  padding: 10px;

  & > img {
    object-fit: fill;
    width: 160px;
    height: 140px;
    border-radius: 5px;
    border: 1px solid #d9d9d9;
  }
  & > img:hover {
    transition: all 0.3s ease-in-out;
    transform: scale(1.12);
  }
  & > div h3 {
    margin: 0;
    font-size: 16px;
    font-weight: 500;
    width: 160px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  & > div h5 {
    width: 160px;
    margin: 0;
    font-weight: 500;
    font-size: 11px;
    color: #a19f9e;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`

const PostCard = () => {
  const { mainPosts } = useSelector(state => state.post)

  return (
    <>
      {mainPosts.slice(0, 6).map((data, index) => (
        <Link href="/review/[id]" as={`/review/${data.id}`}>
          <PostCardWrapper key={index}>
            <img src={data.image_url} alt="" />
            <div>
              <h3>{data.title}</h3>
              <h5>
                {data.author} | {data.category}
              </h5>
            </div>
          </PostCardWrapper>
        </Link>
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
