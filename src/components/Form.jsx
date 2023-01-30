import { useState } from 'react';
import { Button, Form, Col, Row, Alert } from 'react-bootstrap';
import useCategories from '../hooks/useCategories';
import useDrinks from '../hooks/useDrinks';

const Forms = () => {
  const [search, setSearch] = useState({
    drink: '',
    category: '',
  });
  const [error, setError] = useState('');

  const { categories } = useCategories();
  const { consultDrink } = useDrinks();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(search).includes('')) {
      setError('todos los campos son obligatorios');
      return;
    }
    //console.log(search);
    setError('');
    consultDrink(search);
  };

  return (
    <Form onSubmit={handleSubmit}>
      {error && (
        <Alert
          variant="danger"
          className="mt-4 fw-bold text-center text-uppercase"
        >
          {error}
        </Alert>
      )}
      <Row>
        <Col md={6}>
          <Form.Group className="mt-4">
            <Form.Label className="fw-bold" htmlFor="drink">
              Drink Name
            </Form.Label>
            <Form.Control
              id="drink"
              type="text"
              placeholder="Example: Martini, Vodka, Tequila, etc"
              name="drink"
              value={search.drink}
              onChange={(e) =>
                setSearch({
                  ...search,
                  [e.target.name]: e.target.value,
                })
              }
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mt-4">
            <Form.Label className="fw-bold" htmlFor="category">
              Drink Category
            </Form.Label>
            <Form.Select
              id="category"
              name="category"
              value={search.category}
              onChange={(e) =>
                setSearch({
                  ...search,
                  [e.target.name]: e.target.value,
                })
              }
            >
              <option>- Select Category -</option>
              {categories.map((category) => (
                <option key={category.strCategory} value={category.strCategory}>
                  {category.strCategory}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

      <Row className="justify-content-end">
        <Col md={3}>
          <Button
            type="submit"
            variant="danger"
            className="w-100 text-uppercase mt-3 fw-bold"
          >
            Find Drink
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Forms;
