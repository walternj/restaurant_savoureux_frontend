import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

const googleMaps = withScriptjs(withGoogleMap((props) =>
	<GoogleMap
		defaultZoom={8}
		defaultCenter={{ lat: 48.8584, lng:  2.2945 }}
	>
		{props.isMarkerShown && <Marker position={{ lat: 48.8584, lng:  2.2945 }} />}
	</GoogleMap>
	))

	export default googleMaps
