import { Modal, Image } from 'react-bootstrap';
import useDrinks from '../hooks/useDrinks';

const DrinkModal = () => {
  const { modal, handleModalClick, drinkFullDetails, loading } = useDrinks();
  const { strDrink, strDrinkThumb, strInstructions } = drinkFullDetails;

  const showIngredients = () => {
    let ingredients = [];

    for (let i = 1; i < 16; i++) {
      if (drinkFullDetails[`strIngredient${i}`]) {
        ingredients.push(
          <li key={i}>
            {drinkFullDetails[`strIngredient${i}`]} -{' '}
            {drinkFullDetails[`strMeasure${i}`]}
          </li>
        );
      }
    }
    return ingredients;
  };

  return (
    <Modal show={modal} onHide={handleModalClick}>
      <Image src={strDrinkThumb} alt={`Image ${strDrink}`} />
      <Modal.Header>
        <Modal.Title>{strDrink}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="p-3">
          <div className="mb-2">
            <h2>Instructions</h2>
            {strInstructions}
          </div>
          <div>
            <h2>Ingredients and Quantity</h2>
            {showIngredients()}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default DrinkModal;
