import React from 'react'
import Header from '../components/home_components/Header'
import Footer from '../components/home_components/Footer'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { changeStateValue } from '../redux/MainReducer';
import { registerUser } from '../Actions/MainAction';

const Register = () => {
    const register = useSelector(state => state.Data.register)
    const dispatch = useDispatch()

    function changeInpValue(e) {
        dispatch(changeStateValue({
            name: e.target.name,
            value: e.target.value
        })) 
    }

    function registerBtn() {
        if(register.firstName !== '' && register.lastName !== '' && register.email !== '' && register.password !== ''){
            console.log(register)
            dispatch(registerUser(register))
            .then(resp => {
                dispatch(changeStateValue({
                    name: 'register',
                    value: {
                        firstName: '',
                        lastName: '',
                        email: '',
                        password: ''
                    }
                }))
            })
        }
    }
  return (
    <div>
      <Header />
        <main>
          <div className='login_main_container'>
              <h1>Register</h1>
              <div className="login_input_container">
                  <input onChange={(e) => changeInpValue(e)} value={register.firstName} type="text" name='register.firstName' placeholder='First_name' />
                  <input onChange={(e) => changeInpValue(e)} value={register.lastName} type="text" name='register.lastName' placeholder='Last_name' />
                  <input onChange={(e) => changeInpValue(e)} value={register.email} type="email" name='register.email' placeholder='Email' />
                  <input onChange={(e) => changeInpValue(e)} value={register.password} type="password" name='register.password' placeholder='Password' />
                  <button onClick={() => registerBtn()}>Register</button>
                  <div className="login_question">
                    <p>Already have an account?</p>
                    <Link to='/login'>Login</Link>
                  </div>
              </div>
          </div>
        </main>
        <Footer />
    </div>
  )
}

export default Register