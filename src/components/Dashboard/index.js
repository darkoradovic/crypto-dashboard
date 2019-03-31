import React from 'react';
import Page from '../Shared/Page';
import PriceGrid from './PriceGrid';
//import CoinSpotlight from './CoinSpotlight';
import styled from 'styled-components';
import PriceChart from './PriceChart';

const ChartGrid = styled.div`
    display: grid;
    margin-top: 20px;
    grid-gap: 15px
    grid-template-columns: repeat(auto-fill, minmax(700px, 1fr));
    
    @media (max-width: 690px) {
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
      }

      @media (max-width: 470px) {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      }
`;

export default function () {
    return (
        <Page name="dashboard">
            <PriceGrid />
            <ChartGrid>
                {/* <CoinSpotlight /> */}
                <PriceChart />
            </ChartGrid>
        </Page>
    )
}