export const EarningData=[
  {
    color: "#4e73df",
    text: "EARNINGS (MONTHLY)",
    price: "$40,000",
  },
  {
    color: "#1cc88a",
    text: "EARNINGS (ANNUAL)",
    price: "$215,000",
  },
  {
    color: "#36b9cc",
    text: "TASKS",
    price: "50%",
  },
  {
    color: "#f6c23e",
    text: "PENDING REQUESTS",
    price: "18",
  },
];

export const AreaChartData={
  areaChartSeries: [{
    name: "Earning",
    data:[0,10000,5000,15000,10000,20000,15000,25000,20000,30000,25000,40000]
  }],
  areaChartOptions:{
    theme: {
      mode: 'light', 
      palette: 'palette1', 
      monochrome: {
          enabled: true,
          color: '#255aee',
          shadeTo: 'light',
          shadeIntensity: 0.65
      },
  },
    chart: {
      type: "area",
      foreColor: '#373d3f !important',
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: true,
      style: {
        colors: ['#21295c !important']
      }
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100]
      }
  },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      categories: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    },
    yaxis: {
      labels: {
        formatter: function(value) {
          return '$'+value;
        }
      }
    },
  legend: {
    show: false
  }
  }
}

export const donutChartOptions={
    series: [15, 55, 30],
    labels: ['Social', 'Direct', 'Referral'],
    chart: {
      type: 'donut',
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: undefined,
      formatter: function (val, opts) {
        return val
      },
      textAnchor: 'middle',
      distributed: false,
      offsetX: 0,
      offsetY: 0,
      style: {
        fontSize: '14px',
        fontFamily: 'Helvetica, Arial, sans-serif',
        fontWeight: 'bold',
        colors: undefined
      },
    background: {
      enabled: true,
      foreColor: '#fff',
      padding: 4,
      borderRadius: 2,
      borderWidth: 1,
      borderColor: '#fff',
      opacity: 0.9,
      dropShadow: {
        enabled: false,
        top: 1,
        left: 1,
        blur: 1,
        color: '#000',
        opacity: 0.45
      }
    },
    dropShadow: {
      enabled: false,
      top: 1,
      left: 1,
      blur: 1,
      color: '#000',
      opacity: 0.45
    }
    },
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
        expandOnClick: true,
        offsetX: 0,
        offsetY: 0,
        customScale: 1,
        dataLabels: {
          offset: 0,
          minAngleToShowLabel: 10
        }, 
        donut: {
          size: '70%',
          background: 'transparent',
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: '22px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 600,
              color: undefined,
              offsetY: -10,
              formatter: function (val) {
                return val
              }
            },
            value: {
              show: true,
              fontSize: '16px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 400,
              color: undefined,
              offsetY: 16,
              formatter: function (val) {
                return val
              }
            }
          }
        },      
      }
    }
}
  
export const projectData=[
  {
    title: "Server Migration",
    percentage: 20,
    color: "#e74a3b"
  },
  {
    title: "Sales Tracking",
    percentage: 40,
    color: "#f6c23e"
  },
  {
    title: "Customer Database",
    percentage: 60,
    color: "#4e73df"
  },
  {
    title: "Payout Details",
    percentage: 80,
    color: "#36b9cc"
  },
  {
    title: "Account Setup",
    percentage: 100,
    color: "#1cc88a"
  },

];

export const backgroundData=[
  {
    title:"Primary",
    backgroundColor: "#4e73df",
    mainColor: "#fff",
    subColor:"rgba(255,255,255,.5)"
  },
  {
     title:"Success",
    backgroundColor: "#1cc88a",
    mainColor: "#fff",
    subColor:"rgba(255,255,255,.5)"
  },
  {
     title:"Info",
    backgroundColor: "#36b9cc",
    mainColor: "#fff",
    subColor:"rgba(255,255,255,.5)"
  },
  {
     title:"Warning",
    backgroundColor: "#f6c23e",
    mainColor: "#fff",
    subColor:"rgba(255,255,255,.5)"
  },
  {
     title:"Danger",
    backgroundColor: "#e74a3b",
    mainColor: "#fff",
    subColor:"rgba(255,255,255,.5)"
  },
  {
     title:"Secondary",
    backgroundColor: "#858796",
    mainColor: "#fff",
    subColor:"rgba(255,255,255,.5)"
  },
  {
     title:"Light",
    backgroundColor: "#f8f9fc",
    mainColor: "#858796",
    subColor:"rgba(0,0,0,.5)"
  },
  {
     title:"Dark",
    backgroundColor: "#5a5c69",
    mainColor: "#fff",
    subColor:"rgba(255,255,255,.5)"
  }
 
]