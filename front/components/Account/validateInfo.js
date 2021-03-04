export default function validateInfo(values) {
  let errors = {}

  if (!values.username.trim()) {
    errors.username = '아이디를 입력해주세요.'
  }

  if (!values.email) {
    errors.email = '이메일 주소를 입력해주세요.'
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = '이메일 형식에 맞지 않습니다.'
  }
  if (!values.password) {
    errors.password = '비밀번호를 입력해주세요.'
  } else if (values.password.length < 6) {
    errors.password = '비밀번호는 6자 이상이어야 합니다.'
  }

  if (!values.password2) {
    errors.password2 = '비밀번호를 입력해주세요.'
  } else if (values.password2 !== values.password) {
    errors.password2 = '비밀번호가 일치하지 않습니다.'
  }
  return errors
}
