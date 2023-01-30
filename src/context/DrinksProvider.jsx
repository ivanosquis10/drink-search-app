import { useState, useEffect, createContext } from 'react';
import axios from 'axios';

const DrinksContext = createContext();

const DrinksProvider = ({ children }) => {
  const [drinksData, setDrinksData] = useState([]);
  const [modal, setModal] = useState(false);
  const [drinkId, setDrinkId] = useState(null);
  const [drinkFullDetails, setDrinkFullDetails] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getFullDetails = async () => {
      if (!drinkId) return;

      try {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`;
        const { data: fullDetails } = await axios(url);
        setDrinkFullDetails(fullDetails.drinks[0]);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    };

    getFullDetails();
  }, [drinkId]);

  const consultDrink = async (datas) => {
    try {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datas.drink}&c=${datas.category}`;

      const { data } = await axios(url);

      setDrinksData(data.drinks);
    } catch (err) {
      console.log(err);
    }
  };

  const handleModalClick = () => {
    setModal(!modal);
  };

  const handleDrinkClickId = (id) => {
    setDrinkId(id);
  };

  return (
    <DrinksContext.Provider
      value={{
        consultDrink,
        drinksData,
        modal,
        handleModalClick,
        handleDrinkClickId,
        drinkFullDetails,
        loading,
      }}
    >
      {children}
    </DrinksContext.Provider>
  );
};

export { DrinksProvider };

export default DrinksContext;
