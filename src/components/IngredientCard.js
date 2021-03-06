import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import RecipesContext from '../context/RecipesContext';

function IngredientCard({ rota, index, name, urlImage }) {
  const { setSaveIngredient } = useContext(RecipesContext);

  return (
    <Link
      className="recipe-card"
      data-testid={ `${index}-ingredient-card` }
      to={ rota }
      onClick={ () => setSaveIngredient(name) }
    >
      <img
        className="card-img"
        data-testid={ `${index}-card-img` }
        src={ urlImage }
        alt={ name }
      />
      <h4
        className="card-name"
        data-testid={ `${index}-card-name` }
      >
        { name }
      </h4>
    </Link>
  );
}

IngredientCard.propTypes = {
  rota: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  urlImage: PropTypes.string.isRequired,
};

export default IngredientCard;
