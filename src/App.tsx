import DeletarColaborador from "./components/colaborador/deletarcolaborador/DeletarColaborador"
import FormColaborador from "./components/colaborador/formcolaborador/FormColaborador"
import ListaColaboradores from "./components/colaborador/listacolaboradores/ListaColaboradores"
import DeletarDepartamento from "./components/departamento/deletardepartamento/DeletarDepartamento"
import FormDepartamento from "./components/departamento/formdepartamento/FormDepartamento"
import ListaDepartamentos from "./components/departamento/listadepartamento/ListaDepartamento"
import Home from "./pages/Home"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css'
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import { ToastContainer } from "react-toastify"

function App() {
	return (
		<>
			
				<ToastContainer />
				<BrowserRouter>
					<Navbar />
					<div className="min-h-[80vh]">
						<Routes>
							
							<Route path="/home" element={<Home />} />
							<Route path="/departamentos" element={<ListaDepartamentos />} />
							<Route path="/cadastrardepartamentos" element={<FormDepartamento />} />
							<Route path="/editardepartamento/:id" element={<FormDepartamento />} />
							<Route path="/deletardepartamento/:id" element={<DeletarDepartamento />} />
							<Route path="/colaboradores" element={<ListaColaboradores />} />
							<Route path="/cadastrarcolaborador" element={<FormColaborador />} />
							<Route path="/editarcolaborador/:id" element={<FormColaborador />} />
							<Route path="/deletarcolaborador/:id" element={<DeletarColaborador />} />
							
						</Routes>
					</div>
					<Footer />
				</BrowserRouter>
			
		</>
	)
}
export default App
