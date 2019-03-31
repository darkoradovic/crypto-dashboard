import React from 'react';
import styled from 'styled-components';
import {Tile} from "../Shared/Tile";
import {AppContext} from "../AppProvider";
import CoinImage from '../Shared/CoinImage';

const CoinSpotLight = () => {
    return(
        <AppContext.Consumer>
            {({currentFavorite, coinList}) => 
                 <Tile>
                     <SpotlightName>{coinList[currentFavorite].CoinName}</SpotlightName>
                    <CoinImage spotlight coin={coinList[currentFavorite]} />
                </Tile>
            }
           
        </AppContext.Consumer>
        
    )
}

export default CoinSpotLight;

const SpotlightName = styled.h2`
  text-align: center; 
`