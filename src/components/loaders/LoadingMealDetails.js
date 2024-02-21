import React from 'react';
import ContentLoader from 'react-content-loader';

function LoadingMealDetails() {
  const W_WIDTH = window.innerWidth;
  const W_HEIGHT = window.innerHeight;
  const V_OITO = 0.28;
  const NOVE = 0.09;
  const UM_TERCO = 0.33;
  const NOVENTA = 0.9;
  // const CINCO = 0.05;
  const SETENTA = 0.7;
  const OITENTA_TRES = 0.83;
  // const X5 = W_WIDTH * CINCO;
  const X70 = W_WIDTH * SETENTA;
  const X83 = W_WIDTH * OITENTA_TRES;
  return (
    <ContentLoader
      speed={ 2 }
      width={ W_WIDTH }
      height={ W_HEIGHT }
      viewBox={ `0 0 ${W_WIDTH} ${W_HEIGHT}` }
      backgroundColor="#d9d9d9"
      foregroundColor="#ededed"
    >
      <rect x="0" y="0" rx="3" ry="3" width={ W_WIDTH } height="200" />
      <rect x="18" y="222" rx="13" ry="13" width={ W_WIDTH / 2 } height="26" />
      <rect x="18" y="255" rx="9" ry="9" width={ W_WIDTH * V_OITO } height="18" />
      <rect x={ X70 } y="220" rx="13" ry="13" width={ W_WIDTH * NOVE } height="26" />
      <rect x={ X83 } y="220" rx="13" ry="13" width={ W_WIDTH * NOVE } height="26" />
      <rect x="18" y="325" rx="10" ry="10" width={ W_WIDTH * UM_TERCO } height="20" />
      <rect x="18" y="356" rx="10" ry="10" width={ W_WIDTH * NOVENTA } height="250" />
    </ContentLoader>
  );
}

export default LoadingMealDetails;

/*
Referências para criação dos Loaders:
https://skeletonreact.com/#gallery
https://www.npmjs.com/package/react-content-loader
*/
