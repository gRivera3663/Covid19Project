import React from 'react';
import Helmet from 'react-helmet';

import Layout from 'components/Layout';
import Container from 'components/Container';
import { render } from 'enzyme';
import Chart from 'chart.js';
import axios from 'axios';
import BarState from 'components/BarState';


const SecondPage = () => {

  axios.get('https://corona.lmao.ninja/v2/states').then ((response) => {
    makeChart(response.data, 'chart');
  });

  axios.get('https://corona.lmao.ninja/v2/historical/usacounties/california').then ((response) => {
    makeChart2(response.data, 'chart2');
  });

  function makeChart(mainData, chartName) {
    var yAxesLabels = mainData.map(function(d) {return d.state});
    var chartData = mainData.map(function(d) {return d.cases});
    var color = mainData.map(function (d) {return '#7b42f5'});
    var chart = new Chart(chartName, {
      height: 5000,
      type: 'horizontalBar',
      options: {
        scaleShowValues: true,
        maintainAspectRatio: true,
        legend: {
          display: false
        }
      },
      scales: {
        yAxes: [{
          ticks: {
            autoSkip: false
          }
        }]
      },
      data: {
        labels: yAxesLabels,
        datasets: [
          {
            data: chartData,
            backgroundColor: color
          }
        ]
      }
    });
  }

  function makeChart2(mainData, chartName) {
    var color = mainData.map(function (d) {return '#f5a742'});
    var chartData = mainData.map(function(d) {
       return d.timeline.cases;
    });
    console.log(chartData[29]);
    var or = chartData[29];
    console.log(Object.keys(or));

    var chart = new Chart(chartName, {
      height: 5000,
      type: 'bar',
      options: {
        scaleShowValues: true,
        maintainAspectRatio: true,
        legend: {
          display: false
        }
      },
      data: {
        labels: Object.keys(or),
        datasets: [
          {
            data: Object.values(or),
            backgroundColor: color
          }
        ]
      }
    });
  }

  return (
    <Layout pageName="two">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
    integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
    crossorigin="anonymous"></link>
      <Helmet>
        <title>Graphs</title>
      </Helmet>

      <div id="chartTitle">
        <h1>Number of Total Cases per U.S. State/Territory</h1>
      </div>
      <canvas id="chart"></canvas>
      <br />

      <div id="chartTitle">
        <h1>Orange County Total Cases in Last 30 Days</h1>
      </div>
      <canvas id="chart2"></canvas>
      <br />

      <div id="chartTitle">
        <h1>Number of Total Deaths per U.S. State/Territory</h1>
      </div>
      <BarState />
      <br />
    </Layout>
  );
};

export default SecondPage;
