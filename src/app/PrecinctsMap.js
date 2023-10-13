import React from 'react'
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const PrecinctsMap = ({ geoData }) => {
  const colorFunctionWithLogging = (feature) => {
    const precinct = parseInt(feature.properties.precinct)
    const precinctCategory = {
      75: 'Red',
      73: 'Red',
      67: 'Red',
      44: 'Red',
      79: 'Red',
      47: 'Red',
      40: 'Red',
      46: 'Red',
      42: 'Red',
      113: 'Red',
      81: 'Red',
      77: 'Red',
      48: 'Red',
      43: 'Red',
      32: 'Red',
      103: 'Red',
      52: 'Red',
      71: 'Red',
      120: 'Red',
      83: 'Red',
      41: 'Blue',
      101: 'Blue',
      23: 'Blue',
      105: 'Blue',
      69: 'Blue',
      25: 'Blue',
      70: 'Blue',
      60: 'Blue',
      114: 'Blue',
      49: 'Blue',
      28: 'Blue',
      34: 'Blue',
      90: 'Blue',
      63: 'Blue',
      88: 'Blue',
      30: 'Blue',
      33: 'Blue',
      106: 'Blue',
      102: 'Blue',
      45: 'Blue',
      115: 'Blue',
      100: 'Blue',
      76: 'Blue',
      110: 'Blue',
      50: 'Blue',
      61: 'Blue',
      26: 'Blue',
      84: 'Blue',
      109: 'Blue',
      121: 'Blue',
      9: 'Blue',
      7: 'Blue',
      72: 'Blue',
      24: 'Blue',
      104: 'Blue',
      107: 'Blue',
      94: 'Blue',
      10: 'Green',
      62: 'Green',
      108: 'Green',
      78: 'Green',
      122: 'Green',
      13: 'Green',
      5: 'Green',
      14: 'Green',
      66: 'Green',
      20: 'Green',
      18: 'Green',
      68: 'Green',
      123: 'Green',
      6: 'Green',
      1: 'Green',
      112: 'Green',
      19: 'Green',
      111: 'Green',
      17: 'Green',
      22: 'Green',
    }
    
    // const color = precinctCategory.get(precinct, 'Green') // Make sure precinctCategory is defined or imported

    // Log the precinct and its color
    // console.log(`Precinct: ${precinct}, Color: ${color}`)

    return {
      fillColor: color,
      color: 'black',
      weight: 1,
      dashArray: '5, 5',
      fillOpacity: 0.6,
    }
  }

  return (
    <MapContainer
      center={[40.73061, -73.935242]}
      zoom={11}
      style={{ height: '600px', width: '100%' }}
    >
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <GeoJSON
        data={geoData}
        style={colorFunctionWithLogging}
        // Add tooltips. Adjust as needed.
        onEachFeature={(feature, layer) => {
          layer.bindTooltip(`Precinct: ${feature.properties.precinct}`)
        }}
      />
    </MapContainer>
  )
}

export default PrecinctsMap
