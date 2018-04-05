import React from 'react'
import Link from 'gatsby-link'

import './FloatWords.scss'

class FloatWords extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="floats">
        <div
          style={{
            left: '2%',
            animationDuration: '10s',
            animationTimingFunction: 'linear',
          }}
        >
          html5
        </div>
        <div
          style={{
            left: '15%',
            animationDuration: '17s',
            animationTimingFunction: 'ease-in-out',
          }}
        >
          react
        </div>
        <div
          style={{
            left: '27%',
            animationDuration: '18s',
            animationTimingFunction: 'ease-out',
          }}
        >
          javascript
        </div>
        <div
          style={{
            left: '36%',
            animationDuration: '9s',
            animationTimingFunction: 'ease-in',
          }}
        >
          css3
        </div>
        <div
          style={{
            left: '45%',
            animationDuration: '11s',
            animationTimingFunction: 'linear',
          }}
        >
          es6
        </div>
        <div
          style={{
            left: '48%',
            animationDuration: '12s',
            animationTimingFunction: 'linear',
          }}
        >
          json
        </div>
        <div
          style={{
            left: '63%',
            animationDuration: '13s',
            animationTimingFunction: 'ease-in',
          }}
        >
          git
        </div>
        <div
          style={{
            left: '72%',
            animationDuration: '11s',
            animationTimingFunction: 'ease-in-out',
          }}
        >
          front-end developer
        </div>
        <div
          style={{
            left: '60%',
            animationDuration: '8s',
            animationTimingFunction: 'linear',
          }}
        >
          passion
        </div>
        <div
          style={{
            left: '90%',
            animationDuration: '15s',
            animationTimingFunction: 'ease',
          }}
        >
          sass
        </div>
      </div>
    )
  }
}
export default FloatWords
