import React, { Component } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

class StatsBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }


  componentWillMount() {
  }

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.milesData.length < nextProps.milesData.length) this.needsUpdate = true;
  }

  componentDidUpdate() {
    if (this.needsUpdate) {
      this.needsUpdate = false;
      if (this.state.data.length < 1) {
        if (this.props.milesData.length > 0) {
          var tempData = [];
          for (var i = 0; i < this.props.milesData.length; i++) {
            if (this.props.milesData[i].method === "W") {
              tempData[i] = {
                method: "Walking",
                distance: this.props.milesData[i].distance
              };
            } else if (this.props.milesData[i].method === "R") {
              tempData[i] = {
                method: "Running",
                distance: this.props.milesData[i].distance
              };
            } else if (this.props.milesData[i].method === "C") {
              tempData[i] = {
                method: "Cycling",
                distance: this.props.milesData[i].distance
              };
            } else if (this.props.milesData[i].method === "O") {
              tempData[i] = {
                method: "Other",
                distance: this.props.milesData[i].distance
              } 
            } else{
              tempData[i] = {
                method: "Unknown",
                distance: this.props.milesData[i].distance
              }
            }
          }
          this.setState({ data: tempData });
        }
      }
    }
  }


  render() {
    /*if (this.state.data.length < 1) {
      if (this.props.milesData.length > 0) {
        var tempData = [];
        for (var i = 0; i < this.props.milesData.length; i++) {
          if (this.props.milesData[i].method === "W") {
            tempData[i] = {
              method: "Walking",
              distance: parseFloat(this.props.milesData[i].distance).toFixed(0)
            };
          } else if (this.props.milesData[i].method === "R") {
            tempData[i] = {
              method: "Running",
              distance: parseFloat(this.props.milesData[i].distance).toFixed(0)
            };
          } else if (this.props.milesData[i].method === "C") {
            tempData[i] = {
              method: "Cycling",
              distance: parseFloat(this.props.milesData[i].distance).toFixed(0)
            };
          } else if (this.props.milesData[i].method === "O") {
            tempData[i] = {
              method: "Other",
              distance: parseFloat(this.props.milesData[i].distance).toFixed(0)
            } 
          } else{
            tempData[i] = {
              method: "Unknown",
              distance: parseFloat(this.props.milesData[i].distance).toFixed(0)
            }
          }
        }
        this.setState({ data: tempData });
        console.log(tempData)
      }
    } */
    console.log(this.state.data)
    return (
      <BarChart
        data={this.state.data}
        width={300}
        height={200}
        layout="vertical"
        margin={{ top: 5, right: 30, bottom: 5 }}
      >
        <XAxis type="number" tick={{ fill: "#fff" }} />
        <YAxis dataKey="method" type="category" tick={{ fill: "#fff" }} />
        <Tooltip />
        <Bar dataKey="distance" fill="#7aa4e8"/>
      </BarChart>
    );
  }
}

export default StatsBar;
