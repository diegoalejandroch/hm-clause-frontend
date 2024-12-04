import { Bar } from 'react-chartjs-2';
import '../../config/chartConfig';
const data = {
  labels: ['Semillas de tomate', 'Semillas de tomatillo', 'Semillas de pimiento'],
  datasets: [
    {
      label: 'Stock Disponible',
      data: [500, 400, 300],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const StockBarChart = () => (
  <div className="card bg-base-100 shadow-xl p-4">
    <h2 className="card-title">Stock Disponible</h2>
    <Bar data={data} options={options} />
  </div>
);

export default StockBarChart;
