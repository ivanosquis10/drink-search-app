import { Row } from 'react-bootstrap';
import useDrinks from '../hooks/useDrinks';
import Drink from './Drink';

const DrinksList = () => {
  const { drinksData } = useDrinks();

  return (
    <Row>
      {drinksData.map((drink) => (
        <Drink key={drink.idDrink} drink={drink} />
      ))}
    </Row>
  );
};

export default DrinksList;
