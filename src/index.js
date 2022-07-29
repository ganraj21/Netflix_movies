import React from 'react'
import ReactDOM from 'react-dom'
import Titlename from './Titlename'
import Sdata from './Sdata'
import Card from './Card'

ReactDOM.render(
  <>
    <Titlename />
    {Sdata.map(function ncard(val) {
      return (
        <Card
          imgsrc={val.imgsrc}
          title={val.title}
          sname={val.sname}
          link={val.link}
        />
      )
    })}
  </>,
  document.getElementById('root'),
)
