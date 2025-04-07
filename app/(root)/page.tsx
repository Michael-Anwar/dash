import Chart from "@/components/dashboard/Chart";
import Image from "next/image";

export default function DashboardPage() {
  return (
    <div className="container flex flex-col items-center mx-auto mt-[30px] px-[100px] gap-4">
      <div className="flex justify-between w-full flex-wrap gap-[20px]">
        <div className="flex gap-[50px] items-center border-[2px] border-gray-300 bg-white rounded-3xl px-6 py-5 grow justify-between">
          <div className="self-start">
            <h3>Times Bookmarked</h3>
            <p>2:45</p>
          </div>
          <div className="w-[70px] aspect-square relative">
            <Image fill src={"/images/graph-v1.png"} alt="graph" />
          </div>
        </div>
        <div className="flex gap-[50px] items-center border-[2px] border-gray-300 bg-white rounded-3xl px-6 py-5 grow justify-between">
          <div className="self-start">
            <h3>Times Bookmarked</h3>
            <p>2:45</p>
          </div>
          <div className="w-[70px] aspect-square relative">
            <Image fill src={"/images/degrees.png"} alt="graph" />
          </div>
        </div>
        <div className="flex gap-[50px] items-center border-[2px] border-gray-300 bg-white rounded-3xl px-6 py-5 grow justify-between">
          <div className="self-start">
            <h3>Times Bookmarked</h3>
            <p>2:45</p>
          </div>
          <div className="w-[70px] aspect-square relative">
            <Image fill src={"/images/sales-performance-v2.png"} alt="graph" />
          </div>
        </div>
        <div className="flex gap-[50px] items-center border-[2px] border-gray-300 bg-white rounded-3xl px-6 py-5 grow justify-between">
          <div className="self-start">
            <h3>Times Bookmarked</h3>
            <p>2:45</p>
          </div>
          <div className="w-[70px] aspect-square relative">
            <Image fill src={"/images/graph-v1.png"} alt="graph" />
          </div>
        </div>
      </div>
      <Chart/>
    </div>
  );
}
