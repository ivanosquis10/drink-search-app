import { Container } from 'react-bootstrap';
import { CategoriesProvider } from './context/CategoriesProvider';
import { DrinksProvider } from './context/DrinksProvider';

import Form from './components/Form';
import DrinksList from './components/DrinksList';
import DrinkModal from './components/DrinkModal';

const App = () => {
  return (
    <CategoriesProvider>
      <DrinksProvider>
        <header className="py-5">
          <h1>Drink Finder :D</h1>
        </header>

        <Container>
          <Form />
          <DrinksList />
          <DrinkModal />
        </Container>
      </DrinksProvider>
    </CategoriesProvider>
  );
};

export default App;
