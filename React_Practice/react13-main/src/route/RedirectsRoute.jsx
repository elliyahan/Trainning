import React from 'react';
import { Navigate } from 'react-router-dom'
import User from '../pages/User';

const RedirectsRoute = ({auth}) => {
  return auth === true ? <User /> : <Navigate to='/login' />
};

export default RedirectsRoute;

/*
redirects 리다이렉트
방향을 다른 페이지로 돌려 주는 것
ex) 특정 페이지에 왔을 때, 마이 페이지 등 프라이빗한 경우 다시 로그인을 해달라고 돌려주는 것
*/