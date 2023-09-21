import React from 'react'
import Header from '../components/home_components/Header'
import Footer from '../components/home_components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { changeStateValue } from '../redux/MainReducer'
import { loginUser } from '../Actions/MainAction'

const Login = () => {
  const login = useSelector(state=> state.Data.login)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function changeInpValue(e) {
    dispatch(changeStateValue({
      name: e.target.name,
      value: e.target.value
    }))
  }

  function loginBtn(){
    if(login.email !== '' && login.password !==  ''){
        console.log(login)
        dispatch(loginUser(login))
        .then(resp => {
            dispatch(changeStateValue({
                name: 'login',
                value: {
                    email: '',
                    password: ''
                  }
              }))
          })
          navigate('/')
          return {msg: 'User logined successfully'}
        }
      }

  return (
    <div>
      <Header />
      <main>
          <div className='login_main_container'>
            <h1>Login</h1>
            <div className="login_input_container">
                <input onChange={(e) => changeInpValue(e)} value={login.email} type="email" name='login.email' placeholder='Email' />
                <input onChange={(e) => changeInpValue(e)} value={login.password} type="password" name='login.password' placeholder='Password' />
                <button onClick={() => loginBtn()}>Login</button>
                <div className="login_question">
                  <p>Don't have an account yet?</p>
                  <Link to='/register'>Register</Link>
                </div>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Login