import { AboutProps } from "@/type";

interface Props {
    aboutData: AboutProps;
}

const About = ({ aboutData }: Props) => {
    return (
        <>
            <div className="max-w-screen-xl text-white mx-auto p-4" id="about">
                <div className="mx-auto grid max-w-2xl grid-cols-1 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 gap-5" id="about">
                    <div className="text-center">
                        <h1 className="text-9xl font-bold text-rose-800">{aboutData.value1}</h1>
                        <p className="text-2xl font-bold">{aboutData.span1}</p>
                    </div>
                    <div className="flex-col">
                        <div className="w-full bg-neutral-800 text-center py-5">
                            <h1 className="text-5xl font-bold text-rose-800">{aboutData.value2}</h1>
                            <p className="text-gray-400">{aboutData.span2}</p>
                        </div>
                        <div className="w-full bg-neutral-800 mt-3 text-center py-5">
                            <h1 className="text-5xl font-bold text-rose-800">{aboutData.value3}</h1>
                            <p className="text-gray-400">{aboutData.span3}</p>
                        </div>
                    </div>
                    <div className="w-full bg-neutral-800 text-center py-5 flex flex-col justify-center">
                        <h1 className="text-5xl font-bold text-rose-800">{aboutData.value4}</h1>
                        <p className="text-gray-400">{aboutData.span4}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;