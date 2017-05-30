import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { Input, Button } from './styles/form';

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
