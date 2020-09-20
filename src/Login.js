import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase'
import './Login.css'
function Login() {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [name, setName] = useState("raghav123test")
    const [password, setPassword] = useState('')
    const signIn = e => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(err => alert(err.message))
    }

    const register = e => {
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth)
                auth.user.updateProfile({
                    displayName: name,
                })
                    .then(() => history.push('/'))
            })
            .catch((err) => console.log(err.message))
    }

    return (
        <div className='login'>
            <Link to="/">
                <img
                    className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png" alt="amazon logo" />
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form >
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button
                        className="login__signInButton"
                        type="submit"
                        onClick={signIn}
                    >
                        Sign-in</button>
                </form>
                <p>
                    By signing-in you agree to stop being sad and be awesome instead
                    and <br /> make sure you feed the cookie monstor ;)
                </p>
                <button
                    type='submit'
                    onClick={register}
                    className="login__registerButton"
                >Create your amazon account</button>
            </div>
        </div>
    )
}

export default Login
