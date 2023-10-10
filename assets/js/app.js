const ctx = document.getElementById("DinheiroEmCasa");
const ctxCDB = document.getElementById("DinheiroEmCDB");
const ctxFormGafico = document.getElementById("formGrafico");
const valorInvestido = document.getElementById("valorInvestido");
const btn = document.getElementById("btn");
const valoresInvestidosIncremental = [];
const valoresInvestidosPadrao = [];

const val = [5, 6, 8, 7, 9];

new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Dez",
    ],
    datasets: [
      {
        label: "Sem Investimentos",
        data: [200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000, 2200],
        borderWidth: 1,
      },
    ],
  },
  options: {
    animation: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

new Chart(ctxCDB, {
  type: "line",
  data: {
    labels: [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Dez",
    ],
    datasets: [
      {
        label: "Investimento em CDB",
        data: [200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000, 2200],
        borderColor: "red",
        backgroundColor: "red",
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
        text: "Chart.js Line Chart",
      },
    },
  },
});

btn.addEventListener("click", () => {
  for (let i = 1; i <= 24; i++) {
    valoresInvestidosIncremental.push(
      parseInt(valorInvestido.value * i * Math.pow(1 + 0.0109, i))
    );
  }
  console.log(valoresInvestidosIncremental);
  for (let i = 1; i <= 24; i++) {
    valoresInvestidosPadrao.push(parseInt(valorInvestido.value * i));
  }

  new Chart(ctxFormGafico, {
    type: "line",
    data: {
      labels: [
        "Jan",
        "Fev",
        "Mar",
        "Abr",
        "Mai",
        "Jun",
        "Jul",
        "Ago",
        "Set",
        "Out",
        "Dez",
      ],
      datasets: [
        {
          label: "Investimento em CDB",
          data: valoresInvestidosIncremental,
          borderColor: "red",
          backgroundColor: "red",
        },
        {
          label: "Sem Investimentos",
          data: valoresInvestidosPadrao,
          borderColor: "blue",
          backgroundColor: "blue",
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Chart.js Line Chart",
        },
      },
    },
  });

});
