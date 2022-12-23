import { Component } from "react"
import FlipCountdown from '@rumess/react-flip-countdown';
import React from 'react'

class FlipperCountdown extends Component {
  render() {
    return (
      <>
        <FlipCountdown
        size='medium'
        dayTitle='Days'
        hourTitle='Hours'
        minuteTitle='Minutes'
        secondTitle='Seconds'
        hideYear
        hideMonth
          endAt={'2023-02-1 00:00:00'} // Date/Time
        />
      </>
    )
  }
}

export default FlipperCountdown