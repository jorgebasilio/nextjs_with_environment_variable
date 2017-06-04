import styled from 'styled-components';

export const Li = styled.li`
  text-align: center;
  position: relative;
  width: 50%;
  padding: 30px 0;
  background-color: #eaeaea;
  margin: 5px auto;
  font-size: 24px;
  &:hover {
    background-color: #728ca2;
    color: white;
  }
  img {
    vertical-align: center;
    height: 50%;
    position: absolute;
    vertical-align: center;
    padding: 9px;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    &:hover {
      height: 48px;
      transition: all .1s;
      padding: 6px;
    }
    &:active {
      height: 40px;
      transition: all .1s;
      padding: 9px;
    }
  }
}
`;
