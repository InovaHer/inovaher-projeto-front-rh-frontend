import { TbBrandVercel } from 'react-icons/tb'

function Stacks() {
    return (
        <div className="flex flex-col gap-8 items-center justify-center py-6">

            <h1 className="text-2xl md:text-3xl font-bold text-black">
                Tecnologias utilizadas para desenvolver o projeto
            </h1>

            {/* GRID QUE DIVIDE FRONT E BACK */}
            <div className="max-w-7xl w-full px-6 grid grid-cols-1 md:grid-cols-2 gap-12">

                {/* ================= FRONTEND ================= */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-black mb-12">
                        Frontend
                    </h2>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-8 place-items-center">

                        <div className="flex flex-col items-center gap-2">
                            <i className="devicon-javascript-plain colored text-5xl"></i>
                            <p className="text-gray-300">JavaScript</p>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                            <i className="devicon-typescript-plain colored text-5xl"></i>
                            <p className="text-gray-300">TypeScript</p>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                            <i className="devicon-html5-plain colored text-5xl"></i>
                            <p className="text-gray-300">HTML</p>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                            <i className="devicon-css3-plain colored text-5xl"></i>
                            <p className="text-gray-300">CSS</p>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                            <i className="devicon-nodejs-plain colored text-5xl"></i>
                            <p className="text-gray-300">Node.js</p>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                            <i className="devicon-react-original colored text-5xl"></i>
                            <p className="text-gray-300">React</p>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                            <i className="devicon-git-plain colored text-5xl"></i>
                            <p className="text-gray-300">Git</p>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                            <i className="devicon-github-original colored text-5xl"></i>
                            <p className="text-gray-300">GitHub</p>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                            <i className="devicon-vscode-plain colored text-5xl"></i>
                            <p className="text-gray-300">VS Code</p>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                            <i className="devicon-tailwindcss-original colored text-5xl"></i>
                            <p className="text-gray-300">TailwindCSS</p>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                            <TbBrandVercel className="text-5xl text-black" />
                            <p className="text-gray-300">Vercel</p>
                        </div>

                    </div>
                </div>

                {/* ================= BACKEND ================= */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-black mb-12">
                        Back end
                    </h2>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-8 place-items-center">

                        <div className="flex flex-col items-center gap-2">
                            <i className="devicon-java-plain colored text-5xl"></i>
                            <p className="text-gray-300">Java</p>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                            <i className="devicon-spring-plain colored text-5xl"></i>
                            <p className="text-gray-300">Spring Boot</p>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                            <i className="devicon-swagger-plain colored text-5xl"></i>
                            <p className="text-gray-300">Swagger</p>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                            <i className="devicon-mysql-plain colored text-5xl"></i>
                            <p className="text-gray-300">MySQL</p>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                            <i className="devicon-postgresql-plain colored text-5xl"></i>
                            <p className="text-gray-300">PostgreSQL</p>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                            <i className="devicon-git-plain colored text-5xl"></i>
                            <p className="text-gray-300">Git</p>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                            <i className="devicon-github-original colored text-5xl"></i>
                            <p className="text-gray-300">GitHub</p>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                            <i className="devicon-vscode-plain colored text-5xl"></i>
                            <p className="text-gray-300">VS Code</p>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                            <i className="devicon-docker-plain colored text-5xl"></i>
                            <p className="text-gray-300">Docker</p>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
}


export default Stacks