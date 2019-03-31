import React from 'react';
import HighchartsConfig from './HighchartsConfig';
import {AppContext} from '../AppProvider';
import ReactHighcharts from 'react-highcharts';
import HighchartsTheme from './HighChartsTheme';
import ChartSelect from './ChartSelect';
import styles from 'styled-components';

ReactHighcharts.Highcharts.setOptions(HighchartsTheme);

const PriceChart = () => {
    return (
        <AppContext.Consumer>
            {({historical, changeChartSelector}) =>
            <CharColor>
                <ChartSelect defaultValue="months" onChange={e => changeChartSelector(e.target.value)}>
                    <option value="days">Days</option>
                    <option value="weeks">Weeks</option>
                    <option value="months">Months</option>
                </ChartSelect>
                { historical ? <ReactHighcharts config={HighchartsConfig(historical)}/>
                    :
                <div>Loading Chart</div>}
            </CharColor>
            }
        </AppContext.Consumer>
    )
}

export default PriceChart;

const CharColor = styles.div`
box-shadow: 9px 20px 37px -20px rgba(255,255,255,1);
`;