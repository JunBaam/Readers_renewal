import styled from 'styled-components'
import Button from '../Button'

export const AccountWrapper = styled.div`
  width: 400px;
  height: 500px;
  display: flex;
  flex-direction: column;
  border: 1px solid #e4e4e4;
  border-radius: 10px;
  padding: 32px 32px 32px 32px;
  margin: 0 auto;
  margin-top: 60px;
`

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;

  margin-top: 20px;

  & > p {
    font-size: 12px;
    color: #f00e0e;
    margin: 0;
  }
`

export const InputWarrper = styled.input`
  height: 45px;
  width: 100%;
  border: 1px solid #d9d9d9;
  padding: 13px;
  margin: 10px 0px;
  font-size: 14px;
`
