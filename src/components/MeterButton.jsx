import {useState} from 'react'

const MeterButton = () => {
    const [meter, setMeter] = useState(0.00)

    const meterPercent = [
        {
        id: 1,
        text: "25%",
        value: 0.25
        },
        {
        id: 2,
        text: "50%",
        value: 0.50
        },
        {
        id: 3,
        text: "75%",
        value: 0.75
        },
        {
        id: 1,
        text: "100%",
        value: 1.00
        }
    ]
  return (
    <div>MeterButton</div>
  )
}

export default MeterButton