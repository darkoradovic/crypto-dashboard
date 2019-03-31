import React from 'react';
import styled, { css } from 'styled-components';
import { AppContext } from './AppProvider';


function toProperCase(lower){
  return lower.charAt(0).toUpperCase() + lower.substr(1);
}

const ControlButton = ({ name }) => {
    return (
        <AppContext.Consumer>
          {({firstVisit, page, setPage}) => (
            <ControlButtonElem
              active={page === name}
              onClick={()=> setPage(name)}
                hidden={firstVisit && name === 'dashboard'}
              
            >
              {toProperCase(name)}
            </ControlButtonElem>
            )}
        </AppContext.Consumer>
      )
    }

const AppBar = () => {
    return (
        <Bar>
            <Logo>CryptoDashboard</Logo>
            <div></div>
            <ControlButton active name="dashboard" />
            <ControlButton name="settings" />
        </Bar>
    )
}

export default AppBar;

const Bar = styled.div`
display: grid; 
margin-bottom: 40px; 
grid-template-columns: 180px auto 100px 100px; 

@media (max-width: 510px) {
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}

`;

const Logo = styled.div`
  font-size: 1.5em;
  font-weight: bold; 
`

const ControlButtonElem = styled.div`
  margin-top: 6px;
  cursor: pointer; 
  ${props => props.active && css`
    color: #c3073f;
    font-weight: bold;
    text-shadow: -1px -1px 20px rgba(255, 255, 255, 1);
  `}
  ${props => props.hidden && css`
    display: none; 
  `}

`