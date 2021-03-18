import styled from 'styled-components'

export const ReviewUpdateFormWarpper = styled.div`
  margin: 0px 0 10px 20px;
  & > p {
    margin: 0;
    font-size: 20px;
    font-weight: 700;
  }
`

export const ReviewUpdateCategory = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 10px 10px 10px;
  font-weight: 600;
  font-size: 17px;
  margin-top: 10px;

  & > span {
    text-align: center;
  }
`
export const ReviewUpdateRating = styled.div`
  margin-top: 6px;
`
export const ReviewUpdateContent = styled.div`
  margin-top: 6px;
  & > textarea {
    width: 100%;
    height: 70px;
    font-size: 13px;
    font-weight: 700;
    resize: none;
    padding: 0.8em 1em;
  }
`
export const ButtonWarpper = styled.div`
  margin-top: 5px;
  text-align: right;
`

export const UpdateButton = styled.button`
  margin-left: 5px;
  font-size: 15px;
  font-weight: bold;
  padding: 0.25rem 1rem;
  outline: none;
  cursor: pointer;
  border: none;
  background-color: #ffd5b4;
  color: white;
  text-align: center;
  height: 40px;
  border-radius: 5px;

  :hover {
    color: white;
    background-color: #ff9e7d;
    transition: all 0.4s ease-in-out;
  }
`
