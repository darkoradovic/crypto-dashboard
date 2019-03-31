import React from 'react';
import Wellcome from './Wellcome';
import ConfirmBtn from './ConfirmBtn';
import Page from '../Shared/Page';
import CoinGrid from './CoinGrid';
import Search from './Search';

export default function() {
    return (
        <Page name="settings">
        <Wellcome />
        <CoinGrid topSection />
        <ConfirmBtn />
        <Search />
        <CoinGrid />
        </Page>
    )
}