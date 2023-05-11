import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './LoginValidation'
import Validation from './LoginValidation'
import axios from 'axios'
function Login() {
  const navigate = useNavigate()
  const [values, setValues] = useState({
    email: '',
    password: '',
  })
  const [errors, setErrors] = useState({})
  const handleChange = ({ target: { name, value } }) => {
    setValues((p) => ({ ...p, [name]: value }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors(Validation(values))
    if (errors.email === '' && errors.password === '') {
      axios
        .post('http://localhost:8081/login', values)
        .then((res) => {
          if (res.data.Login) {
            localStorage.setItem('token', res.data.token)
            navigate('/home')
          } else {
            alert('No record found!')
          }
          console.log(res)
        })
        .catch((err) => console.log(err))
    }
  }
  return (
    <div>
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={values.email}
          type="email"
          name="email"
          placeholder="email"
        />
        <br />
        <span style={{ color: 'red', fontSize: 12 }}>
          {errors.email && <span>{errors.email}</span>}
        </span>
        <br />
        <input
          onChange={handleChange}
          value={values.password}
          type="password"
          name="password"
          placeholder="password"
        />
        <br />
        <span style={{ color: 'red', fontSize: 12 }}>
          {errors.password && <span>{errors.password}</span>}
        </span>

        <br />
        <button type="submit">Login</button>
        <p onClick={() => navigate('/register')}>Register here</p>
      </form>
    </div>
  )
}

export default Login
