import { GithubLogoIcon } from "@phosphor-icons/react"



function Footer() {
    return (

        <div className="flex justify-center w-full px-2 text-slate-50 bg-indigo-700 py-4 mt-auto">
            <div className="container flex flex-col items-center gap-2">
                <p className='text-base font-bold text-center md:text-xl'>InovaHer RH | Copyright: 2025</p>
                <p className='text-sm text-center md:text-lg'>Acesse nossos projetos</p>
                <div className='flex flex-wrap justify-center gap-2'>
                    <a href="https://github.com/InovaHer" target="_blank" className="flex items-center" rel="noopener noreferrer">
                        <span className="flex items-center justify-center w-10 h-10">
                            <GithubLogoIcon size={28} weight='bold' />
                        </span>
                    </a>
                </div>
            </div>
        </div>

    )
}

export default Footer