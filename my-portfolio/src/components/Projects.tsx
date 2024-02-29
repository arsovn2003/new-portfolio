import Image from 'next/image';
import Krik from '../../public/images/krik.png';
import StreetArtists from '../../public/images/street-artists.png';
import Link from 'next/link';
import { ProjectsProps } from '@/type';
import PrimaryButton from '@/shared/PrimaryButton';

interface Props {
    projectsData: ProjectsProps;
}

const Projects = ({ projectsData }: Props) => {
    return (
        <>
            <div className="max-w-screen-xl text-white mx-auto mt-28 px-4" id="projects">
                <h1 className="md:text-6xl text-4xl md:mb-0 mb-12 md:text-start text-center font-bold uppercase">{projectsData.title}</h1>
                <div className="mx-auto grid max-w-2xl grid-cols-1 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-5">
                    <div className="project-card bg-neutral-800 py-5 relative">
                        <h1 className='text-center font-bold text-2xl'>{projectsData.name1}</h1>
                        <div className="project-card-inner">
                            <div className="project-card-front">
                                <Link href={"https://krik-seven.vercel.app/"}>
                                    <Image src={Krik} alt="" />
                                </Link>
                                <div className="absolute left-0 0 bottom-0 p-4">
                                    <Link href={"https://github.com/arsovn2003/Krik"} target="_blank">
                                        <PrimaryButton value='Code' />
                                    </Link>
                                </div>
                            </div>
                            <div className="project-card-back pt-4 px-4 pb-20">
                                <p className='text-gray-400 leading-8'>{projectsData.content1}</p>
                            </div>
                        </div>
                    </div>
                    <div className="project-card bg-neutral-800 py-5 relative">
                        <h1 className='text-center font-bold text-2xl'>{projectsData.name2}</h1>
                        <div className="project-card-inner">
                            <div className="project-card-front">
                                <Link href={"https://street-artists-liard.vercel.app/"}>
                                    <Image src={StreetArtists} alt="" />
                                </Link>
                            </div>
                            <div className="project-card-back  pt-4 px-4 pb-20">
                                <p className='text-gray-400 leading-8'>{projectsData.content2}</p>
                                <div className="absolute left-0 bottom-0 p-4">
                                    <Link href={"https://github.com/arsovn2003/Street-Artists"} target="_blank">
                                        <PrimaryButton value='Code' />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects;