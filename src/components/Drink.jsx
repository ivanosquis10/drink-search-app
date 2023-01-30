import { Card, Col, Button } from 'react-bootstrap';
import useDrinks from '../hooks/useDrinks';

const Drink = ({ drink }) => {
  const { handleModalClick, handleDrinkClickId } = useDrinks();

  const { strDrink, strDrinkThumb, idDrink } = drink;

  return (
    <Col md={6} lg={3}>
      <Card className="mt-4 mb-4">
        <Card.Img
          variant="top"
          src={strDrinkThumb}
          alt={`Imagen de ${strDrink} `}
        />

        <Card.Body>
          <Card.Title>{strDrink}</Card.Title>

          <Button
            variant={'warning'}
            className="w-100 text-uppercase fw-bold"
            onClick={() => {
              handleModalClick();
              handleDrinkClickId(idDrink);
            }}
          >
            Ver receta
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Drink;
