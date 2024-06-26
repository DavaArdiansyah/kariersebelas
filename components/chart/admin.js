// Data untuk chart bar
const labels = [
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
  ];
  const alumniData = [14, 5, 10, 9, 6, 14, 15, 2, 45, 10];
  const perusahaanData = [8, 10, 15, 12, 8, 87, 9, 54, 7, 4];

  const options = {
    annotations: {
      position: "back",
    },
    series: [
      {
        name: "Alumni",
        data: alumniData,
      },
      {
        name: "Perusahaan",
        data: perusahaanData,
      },
    ],
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    colors: ["#5bc0de", "#5cb85c"],
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
    },
    stroke: {
      curve: "straight",
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"],
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: labels,
    },
  };

  // Render chart bar
  const chartBar = new ApexCharts(
    document.querySelector("#chart"),
    options
  );
  chartBar.render();

  // Data untuk chart pie
  const labelsPie = ["Alumni", "Perusahaan"];
  const dataPie = [246, 258]; // Jumlah users alumni dan perusahaan

  const optionsPie = {
    chart: {
      type: "pie",
      height: 200,
      width: "100%",
    },
    labels: labelsPie,
    series: dataPie,
    legend: {
      position: "bottom",
      horizontalAlign: "center",
    },
    colors: ["#5bc0de", "#5cb85c"],
    dataLabels: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  // Render chart pie
  const chartPie = new ApexCharts(
    document.querySelector("#chartRole"),
    optionsPie
  );
  chartPie.render();