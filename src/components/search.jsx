"use client";
import { useState } from "react";
import { ChevronRight } from "lucide-react";


export default function Search({ setIpData }) {
  const [ip, setIp] = useState("");

  const handleSearch = async () => {
    if (!ip) return;
    try {
      const res = await fetch(`https://ipapi.co/${ip}/json/`);
      const data = await res.json();
      setIpData(data);
    } catch (err) {
      console.error("Hata oluştu:", err);
      setIpData(null);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-3  ">
      <div className="flex md:">
        <input
          className="bg-white rounded-l-[15px] p-2 shadow-lg md:w-sm md:h-[58px]"
          type="text"
          placeholder="IP girin (ör. 8.8.8.8)"
          value={ip}
          onChange={(e) => setIp(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="bg-black text-white rounded-r-[15px] p-2 md:h-[58px]"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}

