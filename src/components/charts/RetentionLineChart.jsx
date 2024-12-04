import { Line } from 'react-chartjs-2';
import '../../config/chartConfig';
const data = {
  labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
  datasets: [
    {
      label: 'Tasa de Retención de Clientes',
      data: [85, 88, 87, 90, 92, 91, 89],
      fill: false,
      backgroundColor: 'rgba(255, 159, 64, 0.2)',
      borderColor: 'rgba(255, 159, 64, 1)',
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

const RetentionLineChart = () => (
  <div className="card bg-base-100 shadow-xl p-4">
    <h2 className="card-title">Tasa de Retención de Clientes</h2>
    <Line data={data} options={options} />
  </div>
);

export default RetentionLineChart;
