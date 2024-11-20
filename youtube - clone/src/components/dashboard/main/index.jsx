import React from "react";

const Main = () => {
  return (
    <div className="pt-5">
      <div className="">
        <input
          type="search"
          placeholder="Search"
          className="bg-[0F0F0F] border border-[#424242] w-[500px] h-[40px] rounded-[30px] p-[10px]"
        />
      </div>
      <div className="grid grid-cols-3 pt-8 gap-5 pr-5">
        <div>
          <iframe
            width="300"
            height="315"
            src="https://www.youtube.com/embed/iehBqAOoN2s?si=eHKZ1I3umbAXZuFF"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>

          <p className="text-[18px] mt-2">
            How I Learned to Code in 4 Months &Got a Job!
          </p>
          <p className="text-[#848484]">Frontend</p>
          <p className="text-[#848484]">30 ming marta - 2 yil oldin</p>
        </div>
        <div>
          <iframe
            width="300"
            height="315"
            src="https://www.youtube.com/embed/edXr0Gt1AVg?si=pKyAyreWYcgVayLZ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>

          <p className="text-[18px] mt-2">
            How I Learned to Code in 4 Months &Got a Job!
          </p>
          <p className="text-[#848484]">Frontend</p>
          <p className="text-[#848484]">30 ming marta - 2 yil oldin</p>
        </div>
        <div>
          <iframe
            width="300"
            height="315"
            src="https://www.youtube.com/embed/ZAbhEDDQUlM?si=zEP-GNJ6qMTpyqFx"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>

          <p className="text-[18px] mt-2">
            How I Learned to Code in 4 Months &Got a Job!
          </p>
          <p className="text-[#848484]">Frontend</p>
          <p className="text-[#848484]">30 ming marta - 2 yil oldin</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
