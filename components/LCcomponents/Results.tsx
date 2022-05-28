import AnnualResult from "./ResultComponents/AnnualResult";
import BuildingResult from "./ResultComponents/BuildingResult";
import CarResult from "./ResultComponents/CarResult";
import CommunityResult from "./ResultComponents/CommunityResult";
import FlightResult from "./ResultComponents/FlightResult";
import RemoteWork from "./ResultComponents/RemoteWork";

const Results = () => {
  return (
    <div className="grid gap-4 grid-cols-3 border-4">
      <div className="bg-blue-500 w-[100%] px-3  mt-3 pb-3">
        개인, 기업, 기관 소유 차량이 전기차로 빠르게 전환되고 있고 COVID-19 이후
        재택근무의 비율이 급격히 증가했습니다. 탄소중립연구원의 기후 임팩트
        계산기는 의사결정에 따른 기후 변화 영향력을 측정합니다. 아래 간단한
        항목들에 답해보시고 귀사의 기후 변화 영향력을 측정해보세요.{" "}
      </div>
      <div className="bg-red-500 w-[100%] px-3  mt-3 pb-3">
        <AnnualResult type="Baseline" />
        <div>
          <div className="font-normal">WorkPlace</div>
          <div className="ml-2">
            <CarResult type="baseline" />
            <BuildingResult type="baseline" />
            <CommunityResult type="baseline" />
            <FlightResult type="baseline" />
            <RemoteWork type="baseline" />
          </div>
        </div>
      </div>

      <div className="bg-yellow-500 w-[100%] px-3  mt-3 pb-3">
        <AnnualResult type="Forecast" />

        <div>
          <div className="font-normal">WorkPlace</div>
          <div className="ml-2">
            <CarResult type="baseline" />
            <BuildingResult type="baseline" />
            <CommunityResult type="baseline" />
            <FlightResult type="baseline" />
            <RemoteWork type="baseline" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
