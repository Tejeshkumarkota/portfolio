"use client";
import React from 'react';
import Title from './Title';
import { HoverEffect } from '@/components/ui/card-hover-effect';
import { SiBootstrap, SiCss3, SiGit, SiHtml5, SiJavascript, SiJquery, SiNextdotjs, SiReact, SiTailwindcss } from 'react-icons/si';

export default function Skills() {

    const skills = [
        {
            text: "HTML5",
            icon: SiHtml5
        },
        {
            text: "CSS3",
            icon: SiCss3
        },
        {
            text: "Bootstrap5",
            icon: SiBootstrap
        },
        {
            text: "JavaScript",
            icon: SiJavascript
        },
        {
            text: "jQuery",
            icon: SiJquery
        },
        {
            text: "React",
            icon: SiReact
        },
        {
            text: "Next.js",
            icon: SiNextdotjs
        },
        {
            text: "Tailwind",
            icon: SiTailwindcss
        },
        {
            text: "ShadcnUI",
            icon: SiTailwindcss
        },
        {
            text: "Git",
            icon: SiGit
        }
    ]
    return (
        <div className='py-10 mx-auto'>
            <Title
                text="Skills 🔪"
                className='flex flex-col items-center justify-center -rotate-6'
            />
            <HoverEffect items={skills} />
        </div>
    )
}