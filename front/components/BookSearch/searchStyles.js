import styled from 'styled-components'

export const SearchContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  margin-bottom: 180px;
`

export const SearchInput = styled.div`
  display: flex;
  width: 600px;
  border: 2px solid #a19f9e;
  padding-left: 20px;
  align-items: center;
  margin-bottom: 30px;

  & > svg {
    width: 20px;
    height: 20px;
  }

  & > input {
    font-size: 18px;
    width: 600px;
    height: 60px;
    padding: 20px;
    border: none;
    outline: 0px;
  }
`
export const SearchResult = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 1200px;
  margin-bottom: 10px;
`

// SearchItem
export const SearchResultCard = styled.div`
  max-width: 230px;
  min-width: 230px;
  display: inline-block;
  border-radius: 10px;
  text-align: center;
  border: 0.5px solid #edebe8;
  margin: 10px 20px;

  & > img {
    padding: 5px 5px;
  }
  & > div {
    color: #a19f9e;
    width: 220px;
  }

  & > div h4 {
    color: black;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 15px;
  }

  & > div h5 {
    margin: 0;
    font-size: 11px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`
