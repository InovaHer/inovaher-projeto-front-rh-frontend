import Stacks from '../components/stacks/Stacks'
import Carrossel from '../components/carrossel/Carrossel'
import InovaHerAbout from '../components/Inovaherabout/InovaHerAbout'

function Sobre() {
  return (
    <>
        <div className="mt-6 md:mt-0">
				<Carrossel />
		</div>
         <div className="mt-6 md:mt-0">
				<Stacks />
		</div>

     { /* InovaHerAbout */}
                 <InovaHerAbout />
    </>

              
  )
}

export default Sobre