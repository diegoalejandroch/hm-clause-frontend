import { Line } from 'react-chartjs-2';

const data = {
  labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
  datasets: [
    {
      label: 'Índice de Germinación',
      data: [0.40, 0.42, 0.41, 0.73, 0.62, 0.64, 0.45],
      fill: false,
      backgroundColor: 'rgba(153, 102, 255, 0.2)',
      borderColor: 'rgba(153, 102, 255, 1)',
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

const GerminationLineChart = () => (
  <div className="card bg-base-100 shadow-xl p-4">
    <h2 className="card-title">Índice de Germinación</h2>
    <Line data={data} options={options} />
  </div>
);

export default GerminationLineChart;
