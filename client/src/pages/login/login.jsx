import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import {PersonOff} from "@mui/icons-material";
import classes from './login.module.css'
function Login() {
    return (
        <div className={classes.wrapper}>
            <div className={classes.textWrapper}>
                <p className={classes.signUp}>Sign Up</p>
                <p className={classes.signUpSubtitle}>Вход в сервис "EasyWay" от Oggetto</p>
            </div>
            <div style={{scale: "150%"}}>
                <GoogleLogin
                    onSuccess={(credentialResponse) => {
                        const credentialResponseDecode = jwtDecode(credentialResponse.credential)
                    }}
                    onError={() => {
                    }}
                    className={classes.signUpGoogle}
                />
            </div>
            <div className={classes.outline}></div>
            <div className={classes.signUpWithout}>
                    <PersonOff sx={{marginBottom: "4px", marginRight: "10px"}}/>
                <p>Sign in without account</p>
            </div>
        </div>
    );
}

export default Login;