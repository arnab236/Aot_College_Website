import React from "react";

function DeptNotice() {
  return (
    <>

      <section class="notice-board flex flex-wrap justify-center m-1 font-[para]">
        <div class="notice bg-white border-2 border-solid border-yellow-500 rounded-xl p-5 m-3 w-[300px] text-left transition-all ease-in duration-200">
          <h2 className="text-blue-800 text-lg">Important Announcement!</h2>
          <p className="">
          This is to notify that students whose PPR forms have been verified can opt for the payment today. The portal is open for payment till 11:00 pm today.
          </p>
          <span class="date text-[#666] italic">Posted on: May 15, 2024</span>
        </div>
        <div class="notice bg-white border-2 border-solid border-yellow-500 rounded-xl p-5 m-3 w-[300px] text-left transition-all ease-in duration-200">
          <h2 className="text-blue-800">Important Announcement!</h2>
          <p className="">
          Regular & Backlog Form fill-up for B.Tech (2nd,4th,6th & 8th) and MCA (2nd & 4th) Even Semester Examinations 2023-24.
          </p>
          <span class="date text-[#666] italic">Posted on: May 15, 2024</span>
        </div>
        <div class="notice bg-white border-2 border-solid border-yellow-500 rounded-xl p-5 m-3 w-[300px] text-left transition-all ease-in duration-200">
          <h2 className="text-blue-800">Important Announcement!</h2>
          <p className="">
          PPR Form fill-up for B.Tech & MCA Odd Semester Examinations 2023-24
          </p>
          <span class="date text-[#666] italic">Posted on: May 11, 2024</span>
        </div>
        <div class="notice bg-white border-2 border-solid border-yellow-500 rounded-xl p-5 m-3 w-[300px] text-left transition-all ease-in duration-200">
          <h2 className="text-blue-800">Important Announcement!</h2>
          <p className="">
          All students are hereby notified that MAKAUT has started backlog enrollment for all even semesters. 
          </p>
          <span class="date text-[#666] italic">Posted on: May 07, 2024</span>
        </div>
      </section>
      
    </>
  );
}

export default DeptNotice;
