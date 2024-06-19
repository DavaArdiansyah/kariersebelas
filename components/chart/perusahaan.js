// Data untuk chart bar
const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dataLamaran = [14, 5, 10, 9, 6];

  const options = {
    annotations: {
      position: "back",
    },
    series: [
      {
        name: "Lamaran",
        data: dataLamaran,
      }
    ],
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    colors: ["#5bc0de"],
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
  const labelsPie = ["Lowongan Pekerjaan", "Lamaran"];
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