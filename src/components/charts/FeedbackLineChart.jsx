import { Line } from 'react-chartjs-2';
import '../../config/chartConfig';
const data = {
  labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
  datasets: [
    {
      label: 'Calificación Promedio del Feedback',
      data: [4.5, 4.2, 4.8, 4.6, 4.7, 4.3, 4.9],
      fill: false,
      backgroundColor: 'rgba(255, 206, 86, 0.2)',
      borderColor: 'rgba(255, 206, 86, 1)',
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

const FeedbackLineChart = () => (
  <div className="card bg-base-100 shadow-xl p-4">
    <h2 className="card-title">Calificación Promedio del Feedback</h2>
    <Line data={data} options={options} />
  </div>
);

export default FeedbackLineChart;
