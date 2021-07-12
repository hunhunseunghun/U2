import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  padding: 40px 45px 100px;
  height: 700px;
  .wrp {
    width: 600px;
    color: #999;
  }
  .wrp img {
    width: 128px;
    display: block;
  }
  .wrp hr {
    display: block;
    unicode-bidi: isolate;
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
    margin-inline-start: auto;
    margin-inline-end: auto;
    overflow: hidden;
    border-style: inset;
    border-width: 1px;
    margin: 50px 0;
    height: 2px;
    background: #000;
  }
  .wrp p {
    width: 100%;
    display: block;
    text-align: center;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    text-align: left;
    line-height: 16px;
  }
  .wrp strong {
    font-size: 22px;
    color: #333;
  }
`;
