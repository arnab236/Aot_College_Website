import React from "react";
import nirfRank from "../assets/nirfRank.jpg";
import telegraph from "../assets/telegraph.jpg";
import telegraph2010 from "../assets/telegraph_2010.jpg";
import times from "../assets/times.jpg";

function Rankings() {
  return (
    <>
      <div className="mx-8 flex gap-8 flex-col lg:flex-row items-center justify-center text-sm xl:flex-nowrap lg:flex-wrap">
        <div className="md:w-[50%] w-[80%] h-full bg-white rounded-xl shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] p-4 flex flex-col items-center justify-center ">
          <img src={telegraph} alt="telegraph" className="p-2"/>
          <h4 className=" text-wrap text-center pt-4">
            “… but the one that comes out on top is the Academy of Technology,
            Adisaptagram, Hooghly, not only because of its infrastructure and
            placement record but also the steady rise in the opening and closing
            rankings in the matrix and a growing reputation among students”. The
            Telegraph.
          </h4>
        </div>
        <div className="md:w-[50%] w-[80%] h-full bg-white rounded-xl shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] p-4 flex flex-col items-center justify-center ">
          <img src={telegraph2010} alt="telegraph2010" className="md:p-12 xl:p-12 w-[50%] md:w-[80%] lg:w-[50%] xl:w-[94%]" />
          <h4 className=" text-wrap text-center pt-4">
            “…Academy of Technology (AOT) at Adisaptagram in Hooghly district
            has joined the top league of tech schools in Bengal…”. The
            Telegraph.
          </h4>
        </div>
        <div className="md:w-[50%] w-[80%] h-full bg-white rounded-xl shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] p-4 flex flex-col items-center justify-center ">
          <img src={nirfRank} alt="nirfRank" />
          <h4 className=" text-wrap text-center pt-4">
            Academy of Technology makes its place with premier institutes of
            West Bengal in MHRD National Institutional Ranking Framework for
            Engineering Institutions in India, 2017.The State Ranking of AOT is
            8th, where IIT Kharagpur is 1st, Jadavpur University is 2nd and
            IIEST Shibpur is 3rd.Academy of Technology adjudged 152nd in the
            country.
          </h4>
        </div>
        <div className="md:w-[50%] w-[80%] h-full bg-white rounded-xl shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] p-4 flex flex-col items-center justify-center ">
          <img src={times} alt="times" className="p-7"/>
          <h4 className=" text-wrap text-center pt-4">
            Academy of Technology acknowledged as 3rd among the list of "Best
            Individual Private Engineering Colleges" - Report from the MAKAUT
            Educational Conclave - TIMES OF INDIA (28th March 2017)
          </h4>
        </div>
        <div className="md:w-[50%] w-[80%] h-full bg-white rounded-xl shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] p-4 flex flex-col items-center justify-center ">
          <img src={nirfRank} alt="nirfRank" />
          <h4 className=" text-wrap text-center pt-4">
            Once again Academy of Technology makes its place with premier
            institutes of West Bengal in MHRD National Institutional Ranking
            Framework for Engineering Institutions in India, 2018. The State
            Ranking of AOT is 8th, where IIT Kharagpur is 1st, Jadavpur
            University is 2nd and IIEST Shibpur is 3rd. Academy of Technology
            adjudged 152nd in the country.
          </h4>
        </div>
      </div>
    </>
  );
}

export default Rankings;
