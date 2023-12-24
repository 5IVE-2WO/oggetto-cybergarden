import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { PersonOff } from "@mui/icons-material";
import classes from "./login.module.css";
import { useDispatch, useSelector } from "react-redux";
import { guest, user, admin } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const guestAuthHandle = () => {
    dispatch(guest());
    navigate("/");
  };
  return (
    <div className={classes.wrapper}>
      <div className={classes.textWrapper}>
        <p className={classes.signUp}>Sign Up</p>
        <p className={classes.signUpSubtitle}>
          Вход в сервис "EasyWay" от Oggetto
        </p>
      </div>
      <div style={{ scale: "135%" }}>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            const credentialResponseDecode = jwtDecode(
              credentialResponse.credential
            );
            dispatch(
              user({
                name: credentialResponseDecode.name,
                email: credentialResponseDecode.email,
              })
            );
            navigate("/");
          }}
          onError={(error) => {
            console.log(error);
          }}
          className={classes.signUpGoogle}
        />
      </div>
      <div className={classes.outline}></div>
      <div className={classes.signUpWithout} onClick={guestAuthHandle}>
        <PersonOff sx={{ marginBottom: "4px", marginRight: "10px" }} />
        <p>Sign in without account</p>
      </div>
    </div>
  );
}

export default Login;
