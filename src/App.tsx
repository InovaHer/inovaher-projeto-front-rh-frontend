import DeletarDepartamento from "./components/departamentos/deletardepartamentos/DeletarDepartamento"
import FormDepartamento from "./components/departamentos/formdepartamento/FormDepartamento"
import ListaDepartamentos from "./components/departamentos/listadepartamento/ListaDepartamento"
import Home from "./pages/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css'
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import { ToastContainer } from "react-toastify"
import ListaColaboradores from "./components/colaboradores/listarcolaboradores/ListarColaboradores"
import DeletarColaborador from "./components/colaboradores/deletarcolaboradores/DeletarColaborador"
import FormColaborador from "./components/colaboradores/formcolaborador/FormColaborador"

function App() {
	return (
		<>

			<ToastContainer />
			<BrowserRouter>
				<Navbar />
				<div className="min-h-[80vh]">
					<Routes>

						<Route path="/" element={<Home />} />
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
