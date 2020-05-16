import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import axios from 'axios';

const state = {
    labels: ['January', 'February', 'March',
             'April', 'May'],
    datasets: [
      {
        label: 'Rainfall',
        backgroundColor: ['rgba(255, 159, 64, 0.6)','rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)','rgba(75, 192, 192, 0.6)','rgba(153, 102, 255, 0.6)',],
        borderWidth: 2,
        data: [65, 59, 80, 81, 56]
      }
    ]
  }

<<<<<<< Updated upstream
  // const state = {
  //   labels: ['January', 'February', 'March',
  //            'April', 'May'],
  //   datasets: [
  //     {
  //       label: 'Deaths',
  //       backgroundColor: 'red',
  //       borderWidth: 2,
  //       data: this.state.countrys
  //     }
  //   ]
  // }
  


=======
>>>>>>> Stashed changes
class Chart extends Component{
    constructor(props){
        super(props);
        this.state = {
            countrys: []
        }
    }
// fetch data here
    componentDidMount() {
        axios.get('https://corona.lmao.ninja/v2/states')
        .then(res => {
            const countrys = res.data;
            this.setState({ countrys });
        })
        .catch(err =>{
            console.log("Error getting data", err)
        })
    }


  render(){
    return (
      <div>
<<<<<<< Updated upstream
          {/* <ul className="list-group col-xs-6">
              <li style={{backgroundColor: "red", width: "300px", listStyle:"none "}}>Number of deaths per continents</li>

            { this.state.countrys.map(country => 
              <li style={{width: "300px"}}className="list-group-item d-flex justify-content-between align-items-center">
              {country.continent} <span className="badge badge-primary badge-pill">{country.deaths}</span></li>) }
          </ul> */}

{/* <ul className="list-group">
              <li style={{backgroundColor: "red", width: "300px", listStyle:"none "}}>Number of deaths per U.S state</li>

    { this.state.countrys.map(country => 
      <li style={{width: "300px"}}className="list-group-item d-flex justify-content-between align-items-center">
      {country.state} <span className="badge badge-primary badge-pill">{country.date} {country.deaths}</span></li>) }

          </ul> */}

{/* <ul className="list-group">
              <li style={{backgroundColor: "red", width: "300px", listStyle:"none "}}>Number of deaths per county</li>

    { this.state.countrys.map(country => 
      <li style={{width: "300px"}}className="list-group-item d-flex justify-content-between align-items-center">
      {country.continent} <span className="badge badge-primary badge-pill">{country.active}</span></li>) }

          </ul> */}

=======
         
>>>>>>> Stashed changes
        <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:10
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />

        {/* <Line
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />

        <Pie
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        /> */}
      </div>
    )
  }
}

export default Chart;