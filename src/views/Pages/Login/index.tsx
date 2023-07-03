import { FC, ReactNode, memo, useEffect, useState } from 'react'
import './login.scss'
import YRequest from '../../../service'
import { useNavigate } from 'react-router-dom'
interface IPros {
  children?: ReactNode
}
const Login: FC<IPros> = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleUsernameChange = (e: any) => {
    setUsername(e.target.value)
  }
  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value)
  }
  const handleLogin = async (e: any) => {
    e.preventDefault()
    console.log(username, '----', password)
    await YRequest.post({
      url: '/auth/login',
      data: { username: username, password: password }
    }).then((res) => {
      console.log('loginREs==>', res)
      navigate('/social')
    })
  }

  return (
    <>
      <div className="login">
        <div className="card">
          <div className="left">
            <h1>Hello Reader.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              cum, alias totam numquam ipsa exercitationem dignissimos, error
              nam, consequatur.
            </p>
            <span>Dont you have an account?</span>
            {/* <Link to="/register">
            <button>Register</button>
          </Link> */}
          </div>
          <div className="right">
            <h1>Login</h1>
            <form>
              <input
                type="text"
                placeholder="Username"
                name="username"
                onChange={handleUsernameChange}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handlePasswordChange}
              />
              {/* {err && err} */}
              <button onClick={handleLogin}>Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
export default memo(Login)
