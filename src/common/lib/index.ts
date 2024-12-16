import React from 'react';
import ReactDom from 'react-dom';
import type {
	Feature,
	MMapClustererProps
} from '@mappable-world/mappable-clusterer';
import type {
	DomEventHandler,
	DrawingStyle,
	LngLat,
	LngLatBounds,
	MapEventUpdateHandler,
	Margin,
	MMapLocationRequest,
	MMapMarkerEventHandler,
	MMapProps,
	MMapZoomLocation
} from '@mappable-world/mappable-types';
import * as mappable from '@mappable-world/mappable-types';
import { MMapLocation } from '@mappable-world/mappable-types/imperative/MMap';
import { Geometry } from '@mappable-world/mappable-types/imperative/MMapFeature/types';
import { reactify } from '@mappable-world/mappable-types/reactify';

type MapInstance = InstanceType<typeof mappable.MMap>;

const reactified = reactify.bindTo(React, ReactDom);
const {
	MMap,
	MMapDefaultFeaturesLayer,
	MMapDefaultSchemeLayer,
	MMapControls,
	MMapControlButton,
	MMapMarker,
	MMapFeature,
	MMapListener,
	MMapContainer,
	MMapControl
} = reactified.module(mappable);

const { clusterByGrid, MMapClusterer } = await import(
	'@mappable-world/mappable-clusterer'
);

export {
	type DomEventHandler as DomEventHandler,
	type DrawingStyle as DrawingStyle,
	Geometry,
	LngLat,
	LngLatBounds,
	MMap as Map,
	mappable as map,
	MMapContainer as MapContainer,
	MMapControl as MapControl,
	MMapControlButton as MapControlButton,
	MMapControls as MapControls,
	MMapDefaultFeaturesLayer as MapDefaultFeaturesLayer,
	MMapDefaultSchemeLayer as MapDefaultSchemeLayer,
	MapEventUpdateHandler,
	MMapFeature as MapFeature,
	type MapInstance,
	MMapListener as MapListener,
	MMapLocation as MapLocation,
	type MMapLocationRequest as MapLocationRequest,
	MMapMarker as MapMarker,
	type MMapMarkerEventHandler as MapMarkerEventHandler,
	MMapProps as MapProps,
	type MMapZoomLocation as MapZoomLocation,
	type Margin as Margin,
	reactified
};

// Clusterer
const MMapClustererR = reactified.entity(MMapClusterer);
export {
	clusterByGrid,
	Feature as ClusterFeature,
	MMapClustererR as MapClusterer,
	MMapClustererProps as MapClustererProps
};
