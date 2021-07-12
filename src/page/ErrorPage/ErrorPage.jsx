import React from 'react';
import { Container } from './ErrorPageStyled.jsx';
import logo from '../../Img/logo.svg';

const ErrorPage = () => {
  return (
    <Container>
      <div className="wrp">
        <img src={logo} alt="u2errpage" />
        <hr></hr>
        <p>
          <strong>페이지를 찾을 수 없습니다.</strong>
          <br />
          <br />
          이용에 불편을 드려 죄송합니다.
        </p>
      </div>
    </Container>
  );
};

export default ErrorPage;
