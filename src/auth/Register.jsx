import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Validation from './LoginValidation'
import axios from 'axios'
function Register() {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const [values, setValues] = useState({
    full_name: '',
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
    // if (errors.email === '' && errors.password === '') {
    setLoading(true)
    axios
      .post('http://localhost:8081/register', values)
      .then((res) => {
        console.log(res)
        setLoading(false)
      })
      .catch((res) => {
        console.log(err)
        setLoading(false)
      })
    // fetch('http://localhost:8081/register', values)
    //   .then((res) => {
    //     setLoading(false)
    //     if (res) {
    //       navigate('/home')
    //     }
    //     console.log(res)
    //   })
    //   .catch((err) => {
    //     setLoading(false)
    //     console.log(err)
    //   })
    // }
  }
  return (
    <div>
      <h3>Register</h3>
      {/* {JSON.stringify(values)} */}
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={values.full_name}
          type="text"
          name="full_name"
          placeholder="name"
        />
        <br />
        <span style={{ color: 'red', fontSize: 12 }}>
          {/* {errors.name && <span>dddd{errors.name}</span>} */}
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
          {/* {errors.email && <span>{errors.email}</span>} */}
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
          {/* {errors.password && <span>{errors.password}</span>} */}
        </span>
        <br />

        {loading ? (
          <button disabled={true}>Loading...</button>
        ) : (
          <button type="submit">Register</button>
        )}
        <p onClick={() => navigate('/')}>Login here</p>
      </form>
    </div>
  )
}

export default Register
