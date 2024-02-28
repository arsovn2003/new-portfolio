import { ServicesProps } from "@/type";
import Image from 'next/image';
import responsiveRed from '../../public/images/responsive-red.png';
import responsiveWhite from '../../public/images/responsive-white.png';
import optimizationRed from '../../public/images/optimization-red.png';
import optimizationWhite from '../../public/images/optimization-white.png';
import componentRed from '../../public/images/component-red.png';
import componentWhite from '../../public/images/component-white.png';
import { useState } from "react";

interface Props {
    servicesData: ServicesProps;
}

const Services = ({ servicesData }: Props) => {
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);

    return (
        <>
            <div className="max-w-screen-xl text-white mx-auto p-4" id="services">
                <div className="mx-auto grid max-w-2xl grid-cols-1 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 gap-5">
                    <div className="flex-col justify-center bg-neutral-800 hover:bg-rose-800 p-10 cursor-pointer"
                        onMouseEnter={() => setIsHovered1(false)}
                        onMouseLeave={() => setIsHovered1(true)}>
                        <div className="card-image flex justify-center mb-6">
                            <Image src={isHovered1 ? responsiveRed : responsiveWhite} alt="" width={200} />
                        </div>
                        <span className="text-2xl font-bold">{servicesData.subtitle1}</span>
                        <p className="mt-5 text-gray-400">{servicesData.content1}</p>
                    </div>
                    <div className="flex-col justify-center bg-neutral-800 hover:bg-rose-800 p-10 cursor-pointer"
                        onMouseEnter={() => setIsHovered2(false)}
                        onMouseLeave={() => setIsHovered2(true)}>
                        <div className="card-image flex justify-center mb-12">
                            <Image src={isHovered2 ? optimizationRed : optimizationWhite} alt="" width={180} />
                        </div>
                        <span className="text-2xl font-bold">{servicesData.subtitle2}</span>
                        <p className="mt-5 text-gray-400">{servicesData.content2}</p>
                    </div>
                    <div className="flex-col justify-center bg-neutral-800 hover:bg-rose-800 p-10 cursor-pointer"
                        onMouseEnter={() => setIsHovered3(false)}
                        onMouseLeave={() => setIsHovered3(true)}>
                        <div className="card-image flex justify-center mb-6">
                            <Image src={isHovered3 ? componentRed : componentWhite} alt="" width={200} />
                        </div>
                        <span className="text-2xl font-bold">{servicesData.subtitle3}</span>
                        <p className="mt-5 text-gray-400">{servicesData.content3}</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Services;