import {useState, useEffect} from 'react'
import { useFinance } from '../contexts'

export function FormularioTransacao(){
    const {adicionarTransacao} = useFinance();
    const [descricao, setDescricao] = useState("");
    const [valor, setValue] = useState("");
    const [tipo, setTipo] = useState("");

    const handdleSubmit = (e) => {
        e.preventDefault();
        if (!descricao || !valor) return alert("Preencha todos os campos!");

        adicionarTransacao({
            descricao,
            valor: Number(valor),
            tipo
        })

        setDescricao("")
        setValue("")
    }
    
    return(
        <form className="flex flex-col w-full items-center border-2 border-gray-300" onSubmit={handdleSubmit}>
            <div className='p-5'>
                <h2 className='font-bold text-3xl text-blue-800 mb-4'>Nova Transação</h2>
                <div className='mb-2'>
                    <label className='text-xl' >Descrição:</label>
                    <input className='border border-gray-400 w-full rounded-sm' type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
                </div>

                <div>
                    <label className='text-xl w-16'>Valor:</label>
                    <input className='mb-2 border border-gray-400 w-full rounded-sm' type="text" value={valor} onChange={(e) => setValue(e.target.value)}/>
                </div>

                <div className='flex gap-3 mb-2'>
                    <label className='flex gap-1'>
                        <input type="radio" name="tipo" value="entrada" checked={tipo === 'entrada'}  onChange={(e) => setTipo(e.target.value)} />
                        <span className='text-green-600'>Entrada</span>
                    </label>
                    <label className='flex gap-1'>
                        <input type="radio" name="tipo" value="saida" checked={tipo === 'saida'} onChange={(e) => setTipo(e.target.value)} />
                        <span className='text-red-600'>Saída</span>
                    </label>
                </div>

                <button className='p-2 bg-blue-600 rounded-sm text-white font-medium' type='submit'>Adicionar</button>
            </div>
        </form>
    )
} 