import React from 'react';
import Chart from '../Chart/Chart';

const ExpensesChart = ({ expenses }) => {
  const chartDataPoints = [
    { label: 'Jan', value: 0, id: Math.random() * Math.random() },
    { label: 'Feb', value: 0, id: Math.random() * Math.random() },
    { label: 'Mar', value: 0, id: Math.random() * Math.random() },
    { label: 'Apr', value: 0, id: Math.random() * Math.random() },
    { label: 'May', value: 0, id: Math.random() * Math.random() },
    { label: 'Jun', value: 0, id: Math.random() * Math.random() },
    { label: 'Jul', value: 0, id: Math.random() * Math.random() },
    { label: 'Aug', value: 0, id: Math.random() * Math.random() },
    { label: 'Sep', value: 0, id: Math.random() * Math.random() },
    { label: 'Oct', value: 0, id: Math.random() * Math.random() },
    { label: 'Nov', value: 0, id: Math.random() * Math.random() },
    { label: 'Dec', value: 0, id: Math.random() * Math.random() },
  ];

  for (const expense of expenses) {
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  }
  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
