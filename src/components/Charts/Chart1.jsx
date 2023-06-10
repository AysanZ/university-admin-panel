import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";
const StatisticsChart = () => {
  const option = {
    color: ["white"],

    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },

    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
      },
      backgroundColor: "rgba(0, 0, 0, 0.59)",

      borderWidth: 0,
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
      show: false,
    },

    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
    ],
    yAxis: [
      {
        type: "value",
        splitLine: {
          show: false,
        },
      },
    ],
    series: [
      {
        type: "line",
        smooth: true,
        lineStyle: {
          color: "#6F6AF8",
          width: 4,
        },

        emphasis: {
          focus: "series",
        },
        showSymbol: false,
        data: [28000, 19000, 32000, 18000, 41000, 30000, 26000],
      },
    ],
  };

  return <ReactECharts option={option} style={{ height: "300px" }} />;
};

export default StatisticsChart;
