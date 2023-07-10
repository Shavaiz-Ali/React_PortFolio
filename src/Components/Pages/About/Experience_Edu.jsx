

const Experience_Edu = () =>{

    const data = [
        {
            id: 1,
            title :"Experience",
            date: "2022 - 2023",
            jobTitle: "Front-End Web Developer",
            companyName:"Intern at Franski-Enterprises",
            job2 : {
                date: "2022 - 2023",
                jobTitle: "Front-End Web Developer",
                companyName:"Intern at Alpha-Logics",
            }
        },
        {
            id: 2,
            title :"Education",
            date: "2017 - 2019",
            jobTitle: "Metric",
            companyName:"Lee Rosey Model School Shishkat Hunza",
            job2 : {
                date: "2019 - 2021",
                jobTitle: "ICS(Computer Science)",
                companyName:"Government Degree College Aliabad Hunza",
            }
        },
    ]

    return<>
        <div className="container lg:flex justify-center items-center gap-5 mt-5 ">
                {
                    data.map((item) =>{
                        return(
                            <>
                            <div className="bg-[#161616] border border-white/[0.15] rounded-[20px] px-8 py-8 lg:w-[50%] w-full lg:mt-0 mt-4" key={item.id}>
                                <div className="main">
                                    <div className="job1">
                                        <div className="text-[16px] text-white font-semibold">
                                            {item.title}
                                        </div>
                                        <p className="text-[16px] font-semibold text-white/[0.30] lg:mt-3 mt-2">{item.date}</p>
                                        <h1 className="text-[18px] text-white font-semibold flex flex-col mt-2">{item.jobTitle}
                                            <span className="text-[14px] text-white/[0.30] mt-1 font-normal">{item.companyName}</span>
                                        </h1>
                                    </div>
                                    <div className="job2 mt-4">
                                        <p className="text-[16px] font-semibold  text-white/[0.30] lg:mt-3 mt-2">{item.job2.date}</p>
                                        <h1 className="text-[18px] text-white font-semibold flex flex-col mt-2">{item.job2.jobTitle}
                                            <span className="text-[14px] text-white/[0.30] mt-1 font-normal">{item.job2.companyName}</span>
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            </>
                        )
                    })
                }
        </div>
    </>
}

export default Experience_Edu