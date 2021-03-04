import { useState, useEffect, useCallback } from 'react'

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = useCallback(e => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })
  })

  const handleSubmit = e => {
    e.preventDefault()
    setErrors(validate(values))
    setIsSubmitting(true)
    console.log(values)
  }

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      console.log(isSubmitting)

      callback()
    }
  }, [errors])

  return { handleChange, handleSubmit, values, errors }
}

export default useForm
