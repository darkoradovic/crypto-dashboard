import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../AppProvider';
import CoinTile from './CoinTile';


function getLowerSectionCoins(filteredCoins, coinList) {
    return (filteredCoins && Object.keys(filteredCoins)) ||
        Object.keys(coinList).slice(0, 100)
}

function getCoinsToDisplay(coinList, topSection, favorites, filterCoins) {
    return topSection ? favorites : getLowerSectionCoins(filterCoins, coinList);
}

const CoinGrid = ({ topSection }) => {
    return (
        <AppContext.Consumer>
            {({ coinList, favorites, filteredCoins }) => (
                <CoinGridStyled>
                    {/*  {Object.keys(coinList).length} */}
                    {getCoinsToDisplay(coinList, topSection, favorites, filteredCoins).map((coinKey) => {
                        return <CoinTile key={coinKey} topSection={topSection} coinKey={coinKey} />
                    })}
                </CoinGridStyled>
            )}
        </AppContext.Consumer>
    )
}

export default CoinGrid;

export const CoinGridStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
    grid-gap: 15px;
    margin-top: 40px;
`;