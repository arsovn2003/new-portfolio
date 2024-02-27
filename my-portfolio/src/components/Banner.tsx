import Image from 'next/image';
import personImage from '../../public/images/person.png';
import PrimaryButton from '@/shared/PrimaryButton';
import { BannerProps } from '@/types';

interface Props {
    bannerData: BannerProps;
}

const Banner = ({ bannerData }: Props) => {
    return (
        <>
            <div className="max-w-screen-xl text-white mx-auto p-4 mt-28">
                <div className="md:flex">
                    <div className="md:w-1/2 flex justify-center">
                        <Image src={personImage} alt="person" width={400} />
                    </div>
                    <div className="md:w-1/2 w-full flex justify-center flex-col md:mt-0 mt-7">
                        <span className='md:text-l font-bold text-rose-800'>{bannerData.paragraph1}</span>
                        <span className='md:text-7xl text-3xl font-bold mb-5'>{bannerData.paragraph2}</span>
                        <p className='md:text-l text-gray-500'>{bannerData.paragraph3}</p>
                        <PrimaryButton value='About me' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner;