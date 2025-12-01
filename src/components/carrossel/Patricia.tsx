function Patricia() {
	return (
		<div className="relative h-[50vh] md:h-[70vh] flex justify-center items-center overflow-hidden">
			{/* Imagem de fundo */}
			<img
				src="https://ik.imagekit.io/wvjuanedn/Projeto%20RH/ChatGPT%20Image%2030%20de%20nov.%20de%202025,%2015_16_52.png?updatedAt=1764526931179"

				className="absolute top-0 left-0 w-full h-full object-cover"
			/>

			{/* Overlay (sombra / marca d’água) */}
			<div className="absolute inset-0 bg-black/40 z-5"></div>
			{/* Use bg-black/20, /30, /40 conforme a intensidade desejada */}

			{/* Conteúdo acima */}
			<div
				className="
          relative z-10
          container 
          grid 
          grid-cols-1 md:grid-cols-2
          text-white
        "
			>
				<div
  className="
    flex 
    flex-col 
    gap-2 md:gap-4
    items-center 
    justify-center 
    py-2 md:py-4
  "
>
  <h2
    className="
      text-3xl md:text-5xl 
      font-bold
      text-center
    "
  >
    Patrícia  Eliseu
  </h2>
  <p>
	Desenvolvedora Full Stack 
  </p>

  <img
    src="https://ik.imagekit.io/wvjuanedn/Sobre/1LLK7768-min.jpg"
    alt="foto patricia"
    className="w-1/2 md:w-2/3 mx-auto h-auto max-h-80 object-contain"
  />
</div>


				<div className="flex justify-center items-center w-full">
					<img
						src="https://ik.imagekit.io/wvjuanedn/QRCode/Patr%C3%ADcia.svg?updatedAt=1764527603784 "
						alt="qr patricia"
						className="w-2/3 md:w-3/4 mx-auto h-64 md:h-96 lg:h-112 object-contain"
					/>
				</div>
			</div>
		</div>
	)
}

export default Patricia
