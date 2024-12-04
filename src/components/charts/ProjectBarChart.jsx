import { Bar } from 'react-chartjs-2';
import '../../config/chartConfig';
const data = {
  labels: ['Variedades Innovadoras de Tomate', 'Calabacines Resilientes', 'Cultivos sostenibles'],
  datasets: [
    {
      label: 'Progreso de Proyectos',
      data: [75, 50, 90],
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

const ProjectBarChart = () => (
  <div className="card bg-base-100 shadow-xl p-4">
    <h2 className="card-title">Progreso de Proyectos</h2>
    <Bar data={data} options={options} />
  </div>
);

export default ProjectBarChart;
