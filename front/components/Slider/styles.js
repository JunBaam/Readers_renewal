import styled from 'styled-components'

export const SlideContainer = styled.div`
  background-color: #faf4f2;
  height: 50vh;
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
  height: 50vh;
  width: 700px;

  & > img {
    cursor: pointer;
    flex: 0 0 40%;
    object-fit: fill;
    height: 320px;
    padding: 10px;
    width: 300px;
    margin-top: 10px;
    margin-left: 20px;
    border: 1px solid #ffd5b4;
    border-radius: 5px;
  }
`

export const SlideText = styled.div`
  flex: 0 0 60%;
  text-align: left;
  padding: 0 50px;
  margin-top: 50px;
  color: #a19f9e;

  & > h2 {
    font-weight: bold;
    color: black;
    margin: 0;
  }
  & > h5 {
    font-weight: 500;
    margin: 0;
    margin-bottom: 15px;
  }
`

export const LeftArrows = styled.span`
  cursor: pointer;
  position: absolute;
  top: 65%;
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
  top: 65%;
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
  top: 67%;
  right: 33%;
  width: 45px;
  color: white;
  height: 23px;
  font-size: 15px;
  background-color: #ff9e7d;
  border-radius: 30px;
`
