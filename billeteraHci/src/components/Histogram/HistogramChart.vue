<template>
    <div>
      <canvas id="histogram"></canvas>
    </div>
  </template>
  
  <script>
  import { onMounted, ref } from 'vue'
  import { Chart, BarElement, CategoryScale, LinearScale } from 'chart.js'
  
  Chart.register(BarElement, CategoryScale, LinearScale);
  
  export default {
    setup() {
      const chartInstance = ref(null);
  
      const initializeChart = () => {
        const ctx = document.getElementById('histogram').getContext('2d');
  
        chartInstance.value = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['0-10', '11-20', '21-30', '31-40', '41-50'],
            datasets: [
              {
                label: 'Frequency',
                backgroundColor: '#42A5F5',
                data: [12, 19, 3, 5, 2]
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: 'Range'
                }
              },
              y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: 'Frequency'
                }
              }
            }
          }
        });
      };
  
      onMounted(() => {
        initializeChart();
      });
  
      return {
        chartInstance
      };
    }
  }
  </script>
  
  <style scoped>
  canvas {
    max-width: 600px;
    max-height: 400px;
  }
  </style>
  