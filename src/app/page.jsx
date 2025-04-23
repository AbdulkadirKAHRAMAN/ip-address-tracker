"use client";
import InformationBar from "@/components/information-bar";
import MapView from "@/components/MapView";
import Search from "@/components/search";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);      // ilk yüklenen ip
  const [ipData, setIpData] = useState(null);  // kullanıcının aradığı ip

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const displayedData = ipData || data; // arama varsa onu göster, yoksa başlangıç verisi

  return (
    <div className="relative min-h-screen bg-gray-100">
      <div className="bg-[url('/Combined-Shape.png')] bg-no-repeat bg-cover items-center py-10 h-[200px] w-full md:h-[300px] md:pt-16">
        <Search setIpData={setIpData} />
      </div>
      <div>
        {displayedData && <MapView data={displayedData} />}
      </div>
      <div className="absolute top-[150px] left-1/2 transform -translate-x-1/2  md:top-[250px] ">
        {displayedData && <InformationBar data={displayedData} />}
      </div>
    </div>
  );
}


