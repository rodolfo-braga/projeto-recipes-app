import React from 'react';
import ContentLoader from 'react-content-loader';

function LoadingMeal() {
  const W_WIDTH = window.innerWidth;
  const W_HEIGHT = window.innerHeight;
  const TRINTA = 0.3;
  const Q_SEIS = 0.46;
  const T_QUATRO = 0.34;
  const S_SETE = 0.67;
  const C_UM = 0.51;
  const X34 = W_WIDTH * T_QUATRO;
  const X67 = W_WIDTH * S_SETE;
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
      <rect x="7" y="70" rx="5" ry="5" width={ W_WIDTH * TRINTA } height="32" />
      <rect x={ X34 } y="70" rx="5" ry="5" width={ W_WIDTH * TRINTA } height="32" />
      <rect x={ X67 } y="70" rx="5" ry="5" width={ W_WIDTH * TRINTA } height="32" />
      <rect x="7" y="110" rx="5" ry="5" width={ W_WIDTH * TRINTA } height="32" />
      <rect x={ X34 } y="110" rx="5" ry="5" width={ W_WIDTH * TRINTA } height="32" />
      <rect x={ X67 } y="110" rx="5" ry="5" width={ W_WIDTH * TRINTA } height="32" />
      <rect x="7" y="160" rx="5" ry="5" width={ W_WIDTH * Q_SEIS } height="160" />
      <rect x={ X51 } y="160" rx="5" ry="5" width={ W_WIDTH * Q_SEIS } height="160" />
      <rect x="7" y="330" rx="5" ry="5" width={ W_WIDTH * Q_SEIS } height="160" />
      <rect x={ X51 } y="330" rx="5" ry="5" width={ W_WIDTH * Q_SEIS } height="160" />
      <rect x="7" y="500" rx="5" ry="5" width={ W_WIDTH * Q_SEIS } height="160" />
      <rect x={ X51 } y="500" rx="5" ry="5" width={ W_WIDTH * Q_SEIS } height="160" />
    </ContentLoader>
  );
}

export default LoadingMeal;

/*
Referências para criação dos Loaders:
https://skeletonreact.com/#gallery
https://www.npmjs.com/package/react-content-loader
*/
