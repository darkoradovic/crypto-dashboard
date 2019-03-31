import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../AppProvider';
import {fontSize1, greenBoxShadow} from '../Shared/Styles';

const ConfirmBtnStyled = styled.div`
margin: 20px;
color: #c3073f;
${fontSize1}
padding: 5px;
cursor: pointer; 
&:hover {
  ${greenBoxShadow} 
}
`;

export const CenterDiv = styled.div`
  display: grid;
  justify-content: center;
`;

const confirmBtn = () => {
    return (
        <AppContext.Consumer>
            {({ confirmFavorites }) =>
                <CenterDiv>
                    <ConfirmBtnStyled onClick={confirmFavorites}>
                        Confirm Favorites
        </ConfirmBtnStyled>
                </CenterDiv>
            }
        </AppContext.Consumer>
    )
}

export default confirmBtn;