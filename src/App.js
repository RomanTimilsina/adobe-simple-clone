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
    property:'saturation',
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
    value: 100,
    range: {
      min: 0,
      max: 200
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
  const [options, setOptions] = useState(DEFAULT_OPTIONS)
  return (
    <div className="container">
      <div className="main-image" />
        <div className="sidebar">
            <SidebarItem />
            <SidebarItem />
        </div>
      <Slider />
    </div>
  );
}

export default App;
