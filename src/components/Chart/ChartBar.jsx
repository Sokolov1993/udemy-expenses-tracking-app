import React from 'react';

import Styles from '../../Styles/ChartBar.module.scss';

const ChartBar = ({ value, maxValue, label }) => {
  let barFillHeight = '0%';

  if (maxValue > 0) {
    barFillHeight = `${Math.round((value / maxValue) * 100)}%`;
  }

  return (
    <div className={Styles.ChartBar}>
      <div className={Styles.chartBar__inner}>
        <div
          className={Styles.chartBar__fill}
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className={Styles.chartBar__label}>{label}</div>
    </div>
  );
};

export default ChartBar;
