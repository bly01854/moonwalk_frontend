import React, { Component } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

class StatsBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: []
    }
  }

  componentDidMount() {
    console.log(this.props.milesData)
  }

  render() {

    if(this.state.data.length<1){
    if(this.props.milesData.length > 0){
        console.log(this.props.milesData)
        this.setState({data: [
            {method: "Walking", distance: this.props.milesData[1].distance},
            {method: "Running", distance: this.props.milesData[2].distance},
            {method: "Cycling", distance: this.props.milesData[3].distance},
            {method: "Other", distance: this.props.milesData[4].distance},
        ]})
    }}

    return (
      <BarChart
        data={this.state.data}
        width={300}
        height={200}
        layout="vertical"
        margin={{ top: 5, right: 30, bottom: 5 }}
      >
      <XAxis type="number" tick={{fill: "#fff" }}/>
      <YAxis dataKey="method" type="category" tick={{fill: "#fff" }}/>
        <Tooltip />
        <Bar dataKey="distance" fill="#7aa4e8"/>
      </BarChart>
    );
  }
}

export default StatsBar;
