

function Navbar() {

    return (
        <>
            <div className="flex justify-between p-8 ">
                {/* logo */}
                <div>
                    InovaHerRH
                </div>
                {/* botões */}
                <div className="flex gap-9">
                    <a href="#">Colaboradores</a>
                    <a href="#">Departamento</a>
                    <a href="#">Sobre Nós</a>
                </div>
            </div>
        </>
    )
}

export default Navbar