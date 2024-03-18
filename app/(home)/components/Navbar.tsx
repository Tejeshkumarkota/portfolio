import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Navbar({className}:{className?:string}) {

    const socials = [
        {
            link: "https://www.linkedin.com/in/tejesh-kumar-kota-with-5years-of-experience-in-ui-web-development/",
            label: "LinkedIn",
            icon: <SiLinkedin className='w-5 h-5 hover:scale-125 transition-all'/>
        },
        {
            link: "https://github.com/Tejeshkumarkota",
            label: "Github",
            icon: <SiGithub className='w-5 h-5 hover:scale-125 transition-all'/>
        }
    ]

    return (
        <nav className={cn('pt-10 pb-10 flex justify-between items-center animate-move-down',className)}>
            <h1 className='text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2'>K Tejesh Kumar 👨🏻‍💻</h1>
            <div className='flex items-center gap-5'>
                {socials.map((social,index) =>{
                    return <Link href={social.link} key={index} aria-label={social.label}>
                        {social.icon}
                    </Link>
                })}
            </div>
        </nav>
    )
}
