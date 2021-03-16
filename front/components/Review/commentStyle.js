import styled from 'styled-components'

export const CommentWrapper = styled.form`
  height: 404px;
  overflow-y: scroll;
`

export const CommentFormWrapper = styled.form`
  /* text-align: right; */

  & > textarea {
    margin: 0;
    width: 100%;
    height: 100px;
    font-size: 14px;
    font-weight: 500;
    resize: none;
    padding: 0.8em 1em;
    border: 1px solid #d9d9d9;
  }
  & > div {
    text-align: right;
  }
`

export const CommentListWrapper = styled.div`
  padding: 5px 10px 5px 10px;
  border-bottom: 1px solid #d9d9d9;

  & > h3 {
    font-size: 18px;
    margin: 0;
  }

  & > h5 {
    padding-top: 5px;
    font-size: 15px;
    color: #6d6d6d;
    font-weight: 600;
    margin: 0;
    line-height: normal;
  }

  & > p {
    font-size: 13px;
    font-weight: 700;
    color: #6d6d6d;
    margin: 0;
  }
`
