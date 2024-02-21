import React from 'react';
import ContentLoader from 'react-content-loader';

function LoadingIngredients() {
  const W_WIDTH = window.innerWidth;
  const W_HEIGHT = window.innerHeight;
  const Q_SEIS = 0.46;
  const C_UM = 0.51;
  const X51 = W_WIDTH * C_UM;
  return (
    <ContentLoader
      speed={ 2 }
      width={ W_WIDTH }
      height={ W_HEIGHT }
      viewBox={ `0 0 ${W_WIDTH} ${W_HEIGHT}` }
      backgroundColor="#d9d9d9"
      foregroundColor="#ededed"
    >
      <rect x="0" y="0" rx="3" ry="3" width={ W_WIDTH } height="60" />
      <rect x="7" y="72" rx="5" ry="5" width={ W_WIDTH * Q_SEIS } height="160" />
      <rect x={ X51 } y="72" rx="5" ry="5" width={ W_WIDTH * Q_SEIS } height="160" />
      <rect x="7" y="240" rx="5" ry="5" width={ W_WIDTH * Q_SEIS } height="160" />
      <rect x={ X51 } y="240" rx="5" ry="5" width={ W_WIDTH * Q_SEIS } height="160" />
      <rect x="7" y="408" rx="5" ry="5" width={ W_WIDTH * Q_SEIS } height="160" />
      <rect x={ X51 } y="408" rx="5" ry="5" width={ W_WIDTH * Q_SEIS } height="160" />
      <rect x="7" y="576" rx="5" ry="5" width={ W_WIDTH * Q_SEIS } height="160" />
      <rect x={ X51 } y="576" rx="5" ry="5" width={ W_WIDTH * Q_SEIS } height="160" />
    </ContentLoader>
  );
}

export default LoadingIngredients;

/*
Referências para criação dos Loaders:
https://skeletonreact.com/#gallery
https://www.npmjs.com/package/react-content-loader
*/
