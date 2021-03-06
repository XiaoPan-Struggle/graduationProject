import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.ul`
  //background: #aaa;
  width: 180px;
  min-width: 180px;
  height: 100%;
  padding: 40px 0;
  border-right: 1px solid #ccc;
  list-style: none;

  > li {
    width: 100%;
    height: 40px;

    &:first-child {
      margin-bottom: 30px;
      border: 3px solid rgb(255, 149, 77);
      border-radius: 10px;
      background-color: rgba(255, 149, 77, .5);
    }

    > a {
      width: 100%;
      height: 100%;
      font-size: 18px;
      color: #000;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .seleted {
      font-weight: 600;
      background-color: rgba(24, 144, 255, .3);
      position: relative;

      &::after {
        content: '';
        position: absolute;
        right: 0;
        top: 0;
        width: 4px;
        height: 40px;
        display: block;
        background-color: rgb(24, 144, 255);
      }
    }
  }
`;
type propsType = {
  id: number
}

const NavBar = (props: propsType) => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('XState');
  };

  return (
    <Nav>
      <li>
        <Link onClick={handleLogout} to="/login">退出登录</Link>
      </li>

      <li>
        <Link className={props.id === 1 ? 'seleted' : ''} to="/home">数据统计</Link>
      </li>
      <li>
        <Link className={props.id === 2 ? 'seleted' : ''} to="/querypage">职位查询</Link>
      </li>
      <li>
        <Link className={props.id === 3 ? 'seleted' : ''} to="/feedback">用户反馈</Link>
      </li>
      {
        Number(localStorage.getItem('XState')) !== 2 &&
        <li>
          <Link className={props.id === 4 ? 'seleted' : ''} to="/browsingrecords">浏览记录</Link>
        </li>
      }
      {
        Number(localStorage.getItem('XState')) !== 2 &&
        <li>
          <Link className={props.id === 5 ? 'seleted' : ''} to="/jobposting">职位发布</Link>
        </li>
      }
        <li>
          <Link className={props.id === 6 ? 'seleted' : ''} to="/myrelease">推荐职位</Link>
        </li>
      {
        Number(localStorage.getItem('XState')) === 2 &&
        <li>
          <Link className={props.id === 7 ? 'seleted' : ''} to="/myfeedback">发布反馈</Link>
        </li>
      }
      {
        Number(localStorage.getItem('XState')) === 2 &&
        <li>
          <Link className={props.id === 8 ? 'seleted' : ''} to="/maylike">猜你喜欢</Link>
        </li>
      }
    </Nav>
  );
};

export {NavBar};
