import React from 'react';
import {AppContext} from '../AppProvider';
import styled from 'styled-components';
import PriceTile from './PriceTile';

 const priceGrid = () => {
  return (
    <AppContext.Consumer>
      {({prices}) => (
        <PriceGrid>
          {prices.map((price, index) => (
            <PriceTile key={`priceTile-${index}`} index={index} price={price}/>
          ))}
        </PriceGrid>
      )}
    </AppContext.Consumer>
  );
}

export default priceGrid;

const PriceGrid = styled.div`
  display: grid; 
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); 
  grid-gap: 15px; 
  margin-top: 40px; 
`