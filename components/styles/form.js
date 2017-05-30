import styled from 'styled-components';

export const Input = styled.input`
  border: 1px solid black;
  font-size: 1em;
  padding: 1em 1em;
  box-sizing: border-box;
  outline: none;
  margin: 1em 0;
  width: 100%;
  &:focus {
    box-shadow: 0 0 .5em #018aff;
  }
`;

export const Button = styled.button`
  background-color: #018aff;
  border: none;
  box-shadow: 5px 5px 6px rgba(0, 0, 0, 0.3);
  color: white;
  cursor: pointer;
  font-size: 1.3em;
  font-weight: bold;
  outline: none;
  padding: .7em 3em;
  text-align: center;
  margin: .7em 1em;
  &:active {
    box-shadow: 5px 5px 1em 0 rgba(0, 0, 0, 0.3);
  }
  &:hover {
    background-color: #01adff;
  }
`;
