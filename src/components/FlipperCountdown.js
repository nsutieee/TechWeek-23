import { Component } from "react"
import FlipCountdown from '@rumess/react-flip-countdown';
import React from 'react'

class FlipperCountdown extends Component {
  render() {
    return (
      <>
        <FlipCountdown
        hideYear
        hideMonth
          endAt={'2023-02-1 00:00:00'} // Date/Time
        />
      </>
    )
  }
}

export default FlipperCountdown