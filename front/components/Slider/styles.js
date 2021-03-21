import styled from 'styled-components'

export const SlideContainer = styled.div`
  background-color: #faf4f2;
  height: 330px;
  width: 900px;
  position: relative;
  margin: auto;
  overflow: hidden;
  border-radius: 10px;
  text-align: center;
  margin-top: 30px;
`

export const SlideActive = styled.div`
  display: ${props => (props.active === 'active' ? 'inline-block' : 'none')};
`

export const SlideInfo = styled.div`
  display: flex;
  height: 330px;
  width: 680px;
  padding: 20px;

  & > img {
    cursor: pointer;
    flex: 0 0 40%;
    object-fit: fill;
    height: 270px;
    margin: 0px 10px 0px 10px;
    width: 260px;
    border: 1px solid #d9d9d9;
    border-radius: 5px;
  }
`

export const SlideText = styled.div`
  flex: 0 0 80%;
  text-align: left;
  padding: 0 50px;
  color: #a19f9e;
  margin-top: 10px;

  & > h2 {
    font-weight: bold;
    font-size: 22px;
    color: black;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  & > h5 {
    font-weight: 500;
    margin: 0;
    margin-bottom: 15px;
  }
  & > div {
    display: -webkit-box;
    font-size: 15px;
    word-wrap: break-word;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

export const LeftArrows = styled.span`
  cursor: pointer;
  position: absolute;
  top: 70%;
  margin: auto;
  width: 35px;
  height: 35px;
  font-size: 30px;
  color: #fba896;
  opacity: 0.5;
  z-index: 55;

  &:hover {
    border-radius: 50%;
    color: orangered;
    transition: all 0.3s ease-in;
  }
`

export const RightArrows = styled.span`
  cursor: pointer;
  position: absolute;
  top: 70%;
  margin: auto;
  width: 35px;
  height: 35px;
  font-size: 30px;
  color: #fba896;
  opacity: 0.5;
  z-index: 10;
  margin-left: 50px;

  &:hover {
    border-radius: 50%;
    color: orangered;
    transition: all 0.3s ease-in;
  }
`

export const ArrowWarpper = styled.div``

export const NumberWrapper = styled.div`
  position: absolute;
  top: 73%;
  right: 34%;
  width: 45px;
  color: white;
  height: 23px;
  font-size: 15px;
  background-color: #ff9e7d;
  border-radius: 30px;
`
