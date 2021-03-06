import React from 'react';
import PropTypes from 'prop-types';

function RecipeVideoDetails({ recipeDetails: { strYoutube = '' } }) {
  const youtubeUrl = strYoutube.replace('watch?v=', 'embed/');
  return (
    <section>
      <h2>Video</h2>
      <iframe
        data-testid="video"
        src={ youtubeUrl }
        allowFullScreen
        title="recipeVideo"
        width="100%"
      />
    </section>
  );
}
RecipeVideoDetails.propTypes = {
  recipeDetails: PropTypes.shape({
    strYoutube: PropTypes.string,
  }).isRequired,
};
export default RecipeVideoDetails;
