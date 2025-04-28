import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";
import imageInstagram1 from '@/assets/instagram/1.png';
import imageInstagram2 from '@/assets/instagram/2.png';
import imageInstagram3 from '@/assets/instagram/3.png';
import imageInstagram4 from '@/assets/instagram/4.png';
import imageLunaFunds1 from '@/assets/lunafunds/1.png';
import imageLunaFunds2 from '@/assets/lunafunds/2.png';
import imageLunaFunds3 from '@/assets/lunafunds/3.png';
import imageLunaFunds4 from '@/assets/lunafunds/4.png';
import imageOratorioLab1 from '@/assets/oratoriolab/1.png';
import imageOratorioLab2 from '@/assets/oratoriolab/2.png';
import imageOratorioLab3 from '@/assets/oratoriolab/3.png';
import imageOratorioLab4 from '@/assets/oratoriolab/4.png';
import {
    SiReact,
    SiPython,
    SiPhp,
    SiMysql,
    SiVuedotjs,
    SiQuasar,
    SiNestjs,
    SiTypescript,
} from "react-icons/si";
import { VscDebugBreakpointLog } from "react-icons/vsc";

export default function Projects2() {
    const data = [
        {
            title: "Instagram Web",
            codeUrl: "https://github.com/giorgiopagani17/instagram-project-work-py",
            content: (
                <div>
                    <p className="mb-4 text-xs font-normal  md:text-sm text-neutral-200">
                        Developed a full-featured Instagram web clone that replicates core functionality of the original platform:
                    </p>
                    <div className="mb-6">
                        <div className="flex items-center gap-2 text-xs  md:text-sm text-neutral-300">
                            <VscDebugBreakpointLog className="text-purple-500" />
                            User authentication (login/registration with password encryption)
                        </div>
                        <div className="flex items-center gap-2 text-xs  md:text-sm text-neutral-300">
                            <VscDebugBreakpointLog className="text-purple-500" />
                            Social interactions (follow/unfollow, like/unlike, comment)
                        </div>
                        <div className="flex items-center gap-2 text-xs  md:text-sm text-neutral-300">
                            <VscDebugBreakpointLog className="text-purple-500" />
                            Content management (create/delete posts, profile image uploads)
                        </div>
                        <div className="flex items-center gap-2 text-xs  md:text-sm text-neutral-300">
                            <VscDebugBreakpointLog className="text-purple-500" />
                            User interface (homepage, explore, search, profiles)
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-3">
                        <span className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium flex items-center">
                            <SiReact className="mr-1" /> React
                        </span>
                        <span className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium flex items-center">
                            <SiPython className="mr-1" /> Python
                        </span>
                        <span className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium flex items-center">
                            <SiPhp className="mr-1" /> PHP
                        </span>
                        <span className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium flex items-center">
                            <SiMysql className="mr-1" /> MySQL
                        </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src={imageInstagram1}
                            alt="Instagram clone homepage"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <Image
                            src={imageInstagram2}
                            alt="Instagram clone profile page"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <Image
                            src={imageInstagram3}
                            alt="Instagram clone post interface"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <Image
                            src={imageInstagram4}
                            alt="Instagram clone explore page"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "LunaFunds",
            codeUrl: "https://github.com/giorgiopagani17/LunaFunds",
            content: (
                <div>
                    <p className="mb-4 text-xs font-normal md:text-sm text-neutral-200">
                        A web application that helps users manage and monitor their finances simply and efficiently.
                    </p>
                    <div className="mb-8">
                        <div className="flex items-center gap-2 text-xs  md:text-sm text-neutral-300">
                            <VscDebugBreakpointLog className="text-purple-500" />
                            Real-time income and expense tracking
                        </div>
                        <div className="flex items-center gap-2 text-xs  md:text-sm text-neutral-300">
                            <VscDebugBreakpointLog className="text-purple-500" />
                            Budgets and customizable financial goals
                        </div>
                        <div className="flex items-center gap-2 text-xs  md:text-sm text-neutral-300">
                            <VscDebugBreakpointLog className="text-purple-500" />
                            Bank transfers via IBAN generation
                        </div>
                        <div className="flex items-center gap-2 text-xs md:text-sm text-neutral-300">
                            <VscDebugBreakpointLog className="text-purple-500" />
                            Transfers between accounts
                        </div>
                        <div className="flex items-center gap-2 text-xs md:text-sm text-neutral-300">
                            <VscDebugBreakpointLog className="text-purple-500" />
                            Group expense management with automatic debt settlement
                        </div>
                        <div className="flex items-center gap-2 text-xs md:text-sm text-neutral-300">
                            <VscDebugBreakpointLog className="text-purple-500" />
                            Cryptocurrency investment simulation with hourly updates
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-3">
                        <span className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium flex items-center">
                            <SiQuasar className="mr-1" /> Quasar
                        </span>
                        <span className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium flex items-center">
                            <SiVuedotjs className="mr-1" /> Vue
                        </span>
                        <span className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium flex items-center">
                            <SiNestjs className="mr-1" /> Nest.js
                        </span>
                        <span className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium flex items-center">
                            <SiTypescript className="mr-1" /> TypeScript
                        </span>
                        <span className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium flex items-center">
                            <SiMysql className="mr-1" /> MySQL
                        </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src={imageLunaFunds1}
                            alt="hero template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <Image
                            src={imageLunaFunds2}
                            alt="feature template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <Image
                            src={imageLunaFunds3}
                            alt="bento template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <Image
                            src={imageLunaFunds4}
                            alt="cards template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "OratorioLab",
            demoUrl: "https://www.oratoriolab.it/",
            content: (
                <div>
                    <p className="mb-4 text-xs font-normal  md:text-sm text-neutral-200">
                        A comprehensive management platform designed specifically for parish oratories to connect with their communities and streamline administrative tasks.
                    </p>
                    <div className="mb-8">
                        <div className="flex items-center gap-2 text-xs md:text-sm text-neutral-300">
                            <VscDebugBreakpointLog className="text-purple-500" />
                            Activity registrations and attendance tracking
                        </div>
                        <div className="flex items-center gap-2 text-xs md:text-sm text-neutral-300">
                            <VscDebugBreakpointLog className="text-purple-500" />
                            Community member database management
                        </div>
                        <div className="flex items-center gap-2 text-xs md:text-sm text-neutral-300">
                            <VscDebugBreakpointLog className="text-purple-500" />
                            Payment processing and cash flow monitoring
                        </div>
                        <div className="flex items-center gap-2 text-xs md:text-sm text-neutral-300">
                            <VscDebugBreakpointLog className="text-purple-500" />
                            Event planning and facility scheduling
                        </div>
                        <div className="flex items-center gap-2 text-xs  md:text-sm text-neutral-300">
                            <VscDebugBreakpointLog className="text-purple-500" />
                            Group coordination and shift management
                        </div>
                        <div className="flex items-center gap-2 text-xs md:text-sm text-neutral-300">
                            <VscDebugBreakpointLog className="text-purple-500" />
                            Direct communication with community members
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-3">
                        <span className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium flex items-center">
                            <SiQuasar className="mr-1" /> Quasar
                        </span>
                        <span className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium flex items-center">
                            <SiVuedotjs className="mr-1" /> Vue
                        </span>
                        <span className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium flex items-center">
                            <SiTypescript className="mr-1" /> TypeScript
                        </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src={imageOratorioLab1}
                            alt="OratorioLab dashboard"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <Image
                            src={imageOratorioLab2}
                            alt="OratorioLab registration system"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <Image
                            src={imageOratorioLab3}
                            alt="OratorioLab event scheduling"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <Image
                            src={imageOratorioLab4}
                            alt="OratorioLab community interface"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                    </div>
                </div>
            ),
        }
    ];
    return (
        <section className="relative w-full">
          <Timeline data={data} />
        </section>
    );
}
