import ModalColaborador from "../components/colaboradores/modalcolaborador/ModalColaborador"
import Footer from "../components/footer/Footer"
import Navbar from "../components/navbar/Navbar"

function Home() {
    return (
        <>
            <Navbar />
            {/* carrossel */}
            <div className="flex bg-indi">
                {/* texto */}
                <div className="flex flex-col justify-center items-center w-full gap-2">
                    <div className="flex justify-center">
                        Gestão de talentos
                    </div>
                    <div>
                        Gerencie seus colaboradores com um clique!
                    </div>
                    <div>
                        Prático, seguro e fácil de usar
                    </div>
                    {/* botões */}
                    <div className="flex gap-9">
                        <ModalColaborador />
                        <button className="border rounded-full  p-2">Calcular Salario</button>
                    </div>
                </div>
                {/* banner da empresa */}
                <div className="w-full">
                    <img src="https://ik.imagekit.io/xmqgsi96x8/logoinovaher.png" alt="foto da logo da inovaher rh" />
                </div>
            </div>
            {/* CARDS */}
            {/* SOBRE */}
            <Footer />
        </>
    )
}
export default Home