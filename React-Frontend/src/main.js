import './glass.css'
import React, { Component } from 'react';
import CanvasJSReact from './canvasjs-3.6.7/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;  

function Applet() {
  const Submit = (e) => {
    e.preventDefault()
    const params = {}

  }

  const options = {
    animationEnabled: true,
    title:{
      text: "MUSE Stream"
    },
    axisX: {
      valueFormatString: "HH:mm:ss",
    },
    axisY: {
      title: "Amplitude",
      prefix: ""
    },
    data: [{
      yValueFormatString: "#0.##",
      xValueFormatString: "HH:mm:ss",
      type: "spline",
      dataPoints: [
        { x: new Date(2020, 0, 1, 0, 0, 0), y: 0 },
        { x: new Date(2020, 0, 1, 0, 0, 1), y: 0.5 },
        { x: new Date(2020, 0, 1, 0, 0, 2), y: 1 },
        { x: new Date(2020, 0, 1, 0, 0, 3), y: 0.5 }
      ]
    }]
  }

  return (
    <div className="glass">
      <form onSubmit={(e) => Submit(e)} className="glass__form">
        <h2>Emotion Detection 😊</h2>
        <div className="glass__form__group">
          <CanvasJSChart options = {options}
          /* onRef={ref => this.chart = ref} */
        />
            <a>Detect your current emotion.   </a>
            <button type="Submit" className="glass__form__btn">
            Predict!
            </button>
        </div>
      </form>
    </div>
  )
}

export default Applet