import Logo from '../assets/logo.svg'

const App = () => {
  
  return (
	  	<div className="flex flex-row justify-center h-full w-full bg-gradient-to-br from-gray-900 to-zinc-800 p-16">
			<div className="flex flex-col justify-center items-center">
				<img src={Logo} className="aspect-square w-[32rem] border-b-2 border-zinc-300 pb-8"/>
				<p className="bg-gradient-to-br from-[#0050ff] to-[#00ffff] bg-clip-text text-transparent font-bold text-5xl my-8 p-0">React-Vite-Tailwind</p>
				<div className="flex flex-row bg-zinc-700 rounded-2xl w-[30rem] h-32 m-2 overflow-hidden" >
					<img src="https://miro.medium.com/max/500/1*cPh7ujRIfcHAy4kW2ADGOw.png" className="aspect-square p-2 border-r-2 border-zinc-300"/>
					<p className="p-4 h-min self-center">
						<span className="text-4xl text-zinc-100 font-semibold">React</span> <br />
						<span className="text-2xl text-zinc-400">v18.0.0</span>
					</p>
				</div>
				<div className="flex flex-row bg-zinc-700 rounded-2xl w-[30rem] h-32 m-2 overflow-hidden" >
					<img src="https://seeklogo.com/images/V/vite-logo-BFD4283991-seeklogo.com.png" className="aspect-square p-4 border-r-2 border-zinc-300"/>
					<p className="p-4 h-min self-center">
						<span className="text-4xl text-zinc-100 font-semibold">Vite 2</span> <br />
						<span className="text-2xl text-zinc-400">v2.9.5</span>
					</p>
				</div>
				<div className="flex flex-row bg-zinc-700 rounded-2xl w-[30rem] h-32 m-2 overflow-hidden" >
					<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png" className="aspect-square p-2 border-r-2 border-zinc-300"/>
					<p className="p-4 h-min self-center">
						<span className="text-4xl text-zinc-100 font-semibold">Tailwind CSS</span> <br />
						<span className="text-2xl text-zinc-400">v3.0.24</span>
					</p>
				</div>
				<p className="border-t-2 border-zinc-300 mt-8 pt-4 w-[30rem] text-center text-xl text-zinc-400 font-semibold">
					Created by <a href="https://github.com/NameCeasar" className="underline">NameCeasar</a>
				</p>
				<p className="text-xl mt-1 text-zinc-500 font-semibold">
					License: MIT
				</p>
			</div>
			<div className="flex flex-col justify-center items-center border-l-4 border-zinc-700 ml-32 pl-32 w-[48rem]">
				<p className="text-6xl text-zinc-100 font-semibold underline mb-5 w-full">
					Getting started:
				</p>
				<p className="text-4xl font-semibold text-zinc-100 leading-loose w-full">
					1) Clone the repository <br/>
					2) Run <span className="bg-gray-900 text-1xl rounded-l border-2 border-zinc-600 p-1 px-2 pb-1s font-mono">yarn</span> in the terminal <br/>
					3) Run <span className="bg-gray-900 text-1xl rounded-l border-2 border-zinc-600 p-1 px-2 pb-1 font-mono">yarn dev</span> in the terminal <br/>
					4) Open <span className="bg-gray-900 text-1xl rounded-l border-2 border-zinc-600 p-1 px-2 pb-1 font-mono">http://localhost:3000</span> <br/>
					5) Enjoy!
				</p>
			</div>
		</div>
  );
}

export default App;