import { Bar } from 'react-chartjs-2';
import '../../config/chartConfig';
const data = {
  labels: ['Semillas de tomate', 'Semillas de tomatillo', 'Semillas de pimiento'],
  datasets: [
    {
      label: 'Ventas',
      data: [6000, 2500, 4000],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
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

const BarChart = () => (
  <div className="card bg-base-100 shadow-xl p-4">
    <h2 className="card-title">Ventas por Producto</h2>
    <Bar data={data} options={options} />
  </div>
);

export default BarChart;
