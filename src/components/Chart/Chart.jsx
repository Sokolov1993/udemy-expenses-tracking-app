import React from 'react';
import ChartBar from './ChartBar';

import Styles from '../../Styles/Chart.module.scss';

const Chart = ({ dataPoints }) => {
  // const dataPointValues = dataPoints.map((item) => item.value);
  const totalMaximum = Math.max(...dataPoints.map((item) => item.value));

  return (
    <div className={Styles.Chart}>
      {dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.id}
            value={dataPoint.value}
            maxValue={totalMaximum}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
