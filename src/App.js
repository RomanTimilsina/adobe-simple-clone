import Slider from './Slider'
import './App.css';
import SidebarItem from './SidebarItem';
import { useState } from 'react';

const DEFAULT_OPTIONS = [
  {
    name:'Brightness',
    property:'brightness',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name:'Contrast',
    property:'contrast',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name:'Saturation',
    property:'saturate',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name:'Grayscale',
    property:'grayscale',
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  },
  {
    name:'Sepia',
    property:'sepia',
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  },
  {
    name:'Hue Rotate',
    property:'hue-rotate',
    value: 0,
    range: {
      min: 0,
      max: 360
    },
    unit: 'deg'
  },
  {
    name:'Blur',
    property:'blur',
    value: 0,
    range: {
      min: 0,
      max: 20
    },
    unit: 'px'
  }
]

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [options, setOptions] = useState(DEFAULT_OPTIONS)
  const selectedItem = options[selectedIndex]

  function handleSliderChange({target}){
    setOptions((prevOptions) => {
      return prevOptions.map((option, index) => {
        if(index !== selectedIndex) return option
          return {...option, value:target.value}
        })
    })
    }
 
    function getImageStyle(){
      const filter = options.map(option => {

        return `${option.property}(${option.value}${option.unit})`
      })

      return {filter: filter.join(' ')}
    }

  return (
    <div className="container">
      <div className="main-image" style={getImageStyle()} />
        <div className="sidebar">
            {
              options.map((option, index) => {
                return <SidebarItem
                active={selectedIndex === index}
                key={index}
                name={option.name}
                handleClick={() => setSelectedIndex(index)}
                />
              })
            }
        </div>
      <Slider 
      min={selectedItem.range.min}
      màx={selectedItem.range.max}
      value={selectedItem.value}
      handleChange={handleSliderChange}
      />
    </div>
  );
}

export default App;



