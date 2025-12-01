
import { Link } from "react-router-dom"

function Navbar() {
	return (
		<div className="w-full bg-indigo-700 text-slate-50 shadow-sm sticky top-0 z-50">
			<div className="container mx-auto flex flex-wrap items-center justify-between py-4 px-8 gap-4">
				
				<Link to="/" className="hover:text-fuchsia-600 cursor-pointer transition">
					<img
						src="https://ik.imagekit.io/wvjuanedn/InovaHer%20-%20%C3%8Dcones/iconeredondo.png?updatedAt=1764261077262"
						alt="Inova Her-RH"
						className="w-20 hover:opacity-80 transition"
					/>
				</Link>

				
					
						

				<div className="flex items-center gap-3 text-sm sm:text-base font-semibold">

    <Link
        to="/colaboradores"
        className="px-4 py-2 rounded-xl bg-white/10 hover:bg-fuchsia-600 hover:text-white transition-all duration-300"
    >
        Colaboradores
    </Link>

    <Link
        to="/departamentos"
        className="px-4 py-2 rounded-xl bg-white/10 hover:bg-fuchsia-600 hover:text-white transition-all duration-300"
    >
        Departamentos
    </Link>

    <Link
        to="/sobre"
        className="px-4 py-2 rounded-xl bg-white/10 hover:bg-fuchsia-600 hover:text-white transition-all duration-300"
    >
        Sobre nós
    </Link>

</div>


                    
						
					
				</div>
			</div>
		
	)
}

export default Navbar