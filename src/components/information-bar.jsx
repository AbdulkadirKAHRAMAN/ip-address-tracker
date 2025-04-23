// components/InformationBar.jsx
export default function InformationBar({ data }) {
    if (!data) return null;
  
    return (
      <div className="w-[250px] bg-white flex flex-col rounded-[15px] gap-4 justify-center p-5 md:flex-row md:divide-x-2 md:divide-gray-500 md:divide-opacity-25 md:px-16 md:py-8 md:w-[1110px]">
        <div className="px-10">
          <p className="text-[10px] opacity-50 flex justify-center md:text-[12px]">IP ADDRESS</p>
          <h2 className="flex justify-center text-[20px] md:text-[26px]">{data.ip}</h2>
        </div>
        <div className="px-10">
          <h3 className="text-[10px] opacity-50 flex justify-center md:text-[12px]">LOCATION</h3>
          <h2 className="flex justify-center text-[20px] md:text-[26px]">{data.city}, {data.region}</h2>
        </div>
        <div className="px-10">
          <h3 className="text-[10px] opacity-50 flex justify-center md:text-[12px]">TIMEZONE</h3>
          <h2 className="flex justify-center text-[20px] md:text-[26px]">{data.timezone}</h2>
        </div>
        <div>
          <h3 className="text-[10px] opacity-50 flex justify-center md:text-[12px]">ISP</h3>
          <h2 className="flex justify-center text-[20px] md:text-[26px]">{data.org}</h2>
        </div>
      </div>
    );
  }
  