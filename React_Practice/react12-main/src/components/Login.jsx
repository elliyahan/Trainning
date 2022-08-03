import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../store/user/userSlice';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const LoginUser = (e) => {
    e.preventDefault();
    dispatch(login(true));
    navigate('/')
  }

  return (
    <div>
      <form onSubmit={(e) => LoginUser(e)}>
        <div>
          <div><label htmlFor="userID">아이디</label></div>
          <div><input type="text" id='userID' placeholder="Email Address" /></div>
        </div>
        <div>
          <div><label htmlFor="userPass">비밀번호</label></div>
          <div><input type="password" id="userPass" placeholder='Password' /></div>
        </div>
        <div>
          <input type="submit" value="로그인" />
        </div>
      </form>
    </div>
  );
};

export default Login;