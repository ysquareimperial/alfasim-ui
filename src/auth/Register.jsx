import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Validation from './LoginValidation'
import axios from 'axios'
function Register() {
  const navigate = useNavigate()
  const [values, setValues] = useState({
    name: '',
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
        .post('http://localhost:8081/register', values)
        .then((res) => {
          navigate('/')
          console.log(res)
        })
        .catch((err) => console.log(err))
    }
  }
  return (
    <div>
      <h3>Register</h3>
      {/* {JSON.stringify(values)} */}
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={values.name}
          type="text"
          name="name"
          placeholder="name"
        />
        <br />
        <span style={{ color: 'red', fontSize: 12 }}>
          {errors.name && <span>dddd{errors.name}</span>}
        </span>
        <br />
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
        <button type="submit">Register</button>
        <p onClick={() => navigate('/')}>Login here</p>
      </form>
    </div>
  )
}

export default Register
