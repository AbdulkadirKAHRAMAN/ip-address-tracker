'use client';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import React from 'react';

const containerStyle = {
  width: '100%',
  height: '400px'
};

export default function MapView({ data }) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  });

  if (!data) return <div>Konum verisi alınamadı.</div>;

  const location = {
    lat: Number(data.latitude),
    lng: Number(data.longitude)
  };

  if (loadError) return <div>Harita yüklenirken bir hata oluştu.</div>;
  if (!isLoaded) return <div>Harita yükleniyor...</div>;

  return (
    <div className="w-full h-[400px] md:h-[640px]">
     <GoogleMap
      mapContainerClassName="w-full h-[400px] md:h-[600px] lg:h-[800px]"
      center={location}
      zoom={12}
>
  <Marker position={location} />
</GoogleMap>

    </div>
  );
}
