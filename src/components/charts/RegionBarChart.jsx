import { Bar } from 'react-chartjs-2';
import '../../config/chartConfig';
const data = {
  labels: ['América del Norte', 'Europa', 'Asia'],
  datasets: [
    {
      label: 'Ventas',
      data: [2250, 8500, 3000],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
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

const RegionBarChart = () => (
  <div className="card bg-base-100 shadow-xl p-4">
    <h2 className="card-title">Ventas por Región</h2>
    <Bar data={data} options={options} />
  </div>
);

export default RegionBarChart;
