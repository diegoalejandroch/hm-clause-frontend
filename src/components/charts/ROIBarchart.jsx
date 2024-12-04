import { Bar } from 'react-chartjs-2';
import '../../config/chartConfig';
 const data = {
    labels: ['Campaña 1', 'Campaña 2', 'Campaña 3'],
    datasets: [
      {
        label: 'ROI de Campañas',
        data: [150, 120, 180],
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

const ROIBarChart = () => (
  <div className="card bg-base-100 shadow-xl p-4">
    <h2 className="card-title">Retorno de Inversión (ROI) de Campañas</h2>
    <Bar data={data} options={options} />
  </div>
);

export default ROIBarChart;
