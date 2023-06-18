import Link from 'next/link'

export default function Login() {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow">
                <h1 className="text-3xl font-bold mb-6">Login</h1>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Digite seu email"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Senha
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="Digite sua senha"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                        >
                            Entrar
                        </button>
                        <a
                            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                            href="/"
                        >
                            Esqueceu sua senha?
                        </a>
                    </div>
                </form>
            </div>
        </div>


        // <>
        //     <div className="container flex justify-center items-center flex-col">
        //         <div className="grid grid-cols-2">
        //             <div className="w-[300px]">
        //                 <h1>facebook</h1>
        //                 <p >O Facebook ajuda você a se conectar e compartilhar
        //                     com as pessoas que fazem parte da sua vida.
        //                 </p>
        //             </div>
        //             <div>
        //                 <div className="flex flex-col">
        //                     <input type="text" placeholder="Email ou telefone" />
        //                     <input type="text" placeholder="Senha" />
        //                 </div>
        //                 <button className="bg-orange-300 rounded-lg p-2 text-white">Entrar</button>
        //                 <p>Esqueceu a senha?</p>
        //                 <hr />
        //                 <button>Criar nova conta</button>
        //             </div>
        //         </div>
        //     </div>
        // </>
    )
}