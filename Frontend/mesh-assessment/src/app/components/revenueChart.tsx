// src/components/ChartComponent.js
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registering required chart components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ChartComponent = () => {
  // Example data for the Bar chart
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
        {
          label: 'Monthly Revenue',
          data: [10, 20, 30, 40, 50, 60],
          backgroundColor: [
            'rgba(75, 192, 192, 0.2)',  // Color for the first bar
            'rgba(255, 99, 132, 0.2)',  // Color for the second bar
            'rgba(54, 162, 235, 0.2)',  // Color for the third bar
            'rgba(255, 159, 64, 0.2)',  // Color for the fourth bar
            'rgba(153, 102, 255, 0.2)', // Color for the fifth bar
            'rgba(255, 205, 86, 0.2)'   // Color for the sixth bar
          ],
          borderColor: [
            'rgba(75, 192, 192, 1)',    // Border color for the first bar
            'rgba(255, 99, 132, 1)',    // Border color for the second bar
            'rgba(54, 162, 235, 1)',    // Border color for the third bar
            'rgba(255, 159, 64, 1)',    // Border color for the fourth bar
            'rgba(153, 102, 255, 1)',   // Border color for the fifth bar
            'rgba(255, 205, 86, 1)'     // Border color for the sixth bar
          ],
          borderWidth: 1,
        },
      ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            return `$${tooltipItem.raw}`; // Format the tooltip label as currency
          },
        },
      },
    },
  };

  return (
    <div className="chart-container">
      <h2 className="text-center font-semibold text-lg">Monthly Revenue</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ChartComponent;
