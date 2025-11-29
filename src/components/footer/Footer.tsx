import { GithubLogoIcon } from "@phosphor-icons/react"

function Footer(){
    return(
        <>
            <div className="flex flex-col justify-center items-center">
                <div>
                    InovaHer | @ 2025
                </div>
                <div>
                    Conheça nossos projetos
                </div>
                <div>
                    <GithubLogoIcon size={32} />
                </div>
            </div>
        </>
    )
}
export default Footer