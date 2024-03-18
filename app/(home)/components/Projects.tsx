import React from 'react';
import { SiAntdesign, SiBootstrap, SiCss3, SiGrunt, SiHtml5, SiJavascript, SiJquery, SiMui, SiNextdotjs, SiReact, SiTailwindcss } from 'react-icons/si';
import Title from './Title';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover';

export default function Projects() {

    const projects = [
        {
            title: "ICT - International Capital Trading",
            tech: [SiReact, SiAntdesign, SiBootstrap, SiMui],
            link: "https://www.ict.ae/",
            cover: "/ict-project.png",
            background: "bg-blue-900"
        },
        {
            title: "eDental Portal",
            tech: [SiBootstrap, SiCss3, SiGrunt, SiJavascript, SiJquery],
            link: "https://www.edentalportal.com/",
            cover: "/edental-study-portal-project.png",
            background: "bg-indigo-500"
        },
        {
            title: "RealCube",
            tech: [SiBootstrap, SiCss3, SiJquery, SiHtml5],
            link: "https://www.realcube.estate/ikes",
            cover: "/realcube-project.png",
            background: "bg-yellow-300"
        },
        {
            title: "Feel Good Stay",
            tech: [SiBootstrap, SiCss3, SiJquery, SiJavascript, SiGrunt],
            link: "https://www.feelgoodstay.in/booking",
            cover: "/feel-good-stay-project.png",
            background: "bg-lime-400"
        },
        {
            title: "ExC Academy",
            tech: [SiNextdotjs, SiTailwindcss],
            link: "https://www.exc.academy/sap-ariba-training-in-bangalore",
            cover: "/exc-academy-project.png",
            background: "bg-violet-500"
        },
        {
            title: "eDental Doctor",
            tech: [SiReact, SiAntdesign],
            link: "https://dev-doctors.edentalportal.com/dashboard",
            cover: "/edental-doctors-portal-project.png",
            background: "bg-blue-700"
        }
    ]

    return (
        <div className='py-10 p-5 sm:p-0'>
            <Title
                text="Projects 🎨"
                className='flex flex-col items-center justify-center rotate-6'
            />
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pt-20 gap-5'>
                {projects.map((project,index) => {
                    return (
                        <Link target='_blank' href={project.link} key={index}>
                            <div className={cn("p-5 rounded-md",project.background)}>
                                <DirectionAwareHover
                                    imageUrl={project.cover}
                                    className='w-full space-y-5 cursor-pointer'
                                >   
                                    <div className='space-y-5'>
                                        <h1 className='text-2xl font-bold'>
                                            {project.title}
                                        </h1>
                                        <div className='flex items-center gap-5'>
                                            {project.tech.map((Icon,index)=> {
                                                return(
                                                    <Icon className='w-8 h-8' key={index} />
                                                )
                                            })}
                                        </div>
                                    </div>
                                </DirectionAwareHover>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    )
}