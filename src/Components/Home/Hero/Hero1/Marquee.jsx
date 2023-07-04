const Marquee = () => {
  return (
    <>
      <div className="marquee lg:w-[100%] w-full border border-white/[0.15] text-center bg-[#161616] gap-5 rounded-[50px] px-4 py-2 lg:mt-0 mt-5">
        <marquee direction="left" className="text-white">
          <span className="text-gray-600 text-[18px] font-normal">
            Latest Work And{" "}
                <span className="text-white text-[20px] font-normal">
                  Featured .{" "}
                </span>
          </span>

          <span className="text-gray-600 text-[18px] font-normal">
            Latest Work And{" "}
                <span className="text-white text-[20px] font-normal">
                  Featured .{" "}
                </span>
          </span>
          
          <span className="text-gray-600 text-[18px] font-normal">
            Latest Work And{" "}
                <span className="text-white text-[20px] font-normal">
                  Featured .{" "}
                </span>
          </span>
        </marquee>
      </div>
    </>
  );
};

export default Marquee;
