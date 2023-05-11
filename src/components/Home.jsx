import axios from 'axios'
import React from 'react'

function Home() {
  const handleAuth = () => {
    axios
      .get('http://localhost:8081/checkauth', {
        headers: { 'access-token': localStorage.getItem('token') },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }
  return (
    <div>
      home
      <button onClick={handleAuth}>Check</button>
    </div>
  )
}

export default Home
