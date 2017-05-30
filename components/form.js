import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';

export const Input = styled.input`
  border: 1px solid black;
  font-size: 1em;
  padding: 1em 1em;
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

function Form({ defaultValue, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <Grid>
        <Row center='md'>
          <Col xs={6} md={5}>
            <Input
              name="task"
              defaultValue={defaultValue}
              autoFocus
              type="text"
              placeholder="Agregar tarea"
            />
          </Col>
          <Col xs={6} md={4}>
            <Button>Agregar</Button>
          </Col>
        </Row>
      </Grid>
    </form>
  );
}

Form.propTypes = {
  defaultValue: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};

Form.defaultProps = {
  defaultValue: '',
};

export default Form;
