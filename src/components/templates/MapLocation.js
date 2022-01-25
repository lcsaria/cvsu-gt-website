import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%',
  position: 'sticky'
};

export class MapContainer extends Component {
  render() {
    return (
      <div 
        className="mt-3" 
        style={{ position: 'relative', width: '60vw', height: '50vh' }}
        >
      <Map
        google={this.props.google}
        zoom={17}
        style={mapStyles}
        initialCenter={
          {
            lat: 14.38498,
            lng: 120.8805008
          }
        }
      >
          <Marker 
                  onClick={this.onMarkerClick}
                  name={'Current location'} 
             />
             <InfoWindow onClose={this.onInfoWindowClose}>                             
                <div>
                  <h1>CvSU</h1> 
                </div>
             </InfoWindow>
          </Map>
          </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyD9fuhHNgMIZw9CUuqZWENL_ruWeMpIlIM'
})(MapContainer);	 