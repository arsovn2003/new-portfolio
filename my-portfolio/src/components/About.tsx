import { AboutProps } from "@/types";

interface Props {
    aboutData: AboutProps;
}

const About = ({ aboutData }: Props) => {
    return (
        <>
            <div className="max-w-screen-xl text-white mx-auto p-4">
                <div className="mx-auto grid max-w-2xl grid-cols-1 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 gap-5">
                    <div className="flex-col justify-center bg-neutral-800 hover:bg-rose-800 p-10">
                        <span>{aboutData.subtitle1}</span>
                        <p className="mt-5">{aboutData.content1}</p>
                    </div>
                    <div className="flex-col justify-center bg-neutral-800 hover:bg-rose-800 p-10">
                        <span>{aboutData.subtitle2}</span>
                        <p className="mt-5">{aboutData.content2}</p>
                    </div>
                    <div className="flex-col justify-center bg-neutral-800 hover:bg-rose-800 p-10">
                        <span>{aboutData.subtitle3}</span>
                        <p className="mt-5">{aboutData.content3}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;