import Stacks from '../components/stacks/Stacks'
import Carrossel from '../components/carrossel/Carrossel'

function Sobre() {
  return (
    <>
        <div className="mt-6 md:mt-0">
				<Carrossel />
		</div>
         <div className="mt-6 md:mt-0">
				<Stacks />
		</div>
    </>
  )
}

export default Sobre