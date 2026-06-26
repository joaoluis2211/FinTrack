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
        <form className="flex flex-col p-6 w-full bg-white border-2 rounded-md border-gray-300" onSubmit={handdleSubmit}>
            <h2 className='text-2xl mb-6'>Nova Transação</h2>
            <div className='mb-4'>
                <label className='text-lg' >Descrição:</label>
                <input className='border border-gray-400 min-h-10 w-full rounded-sm' type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
            </div>

            <div className='mb-4'>
                <label className='text-lg'>Valor:</label>
                <input className='border border-gray-400 min-h-10 w-full rounded-sm' type="text" value={valor} onChange={(e) => setValue(e.target.value)}/>
            </div>

            <div className='flex gap-5 mb-4'>
                <label className='flex gap-1'>
                    <input className='w-4' type="radio" name="tipo" value="entrada" checked={tipo === 'entrada'}  onChange={(e) => setTipo(e.target.value)} />
                    <span className=' text-lg'>Entrada</span>
                </label>
                <label className='flex gap-1'>
                    <input className='w-4' type="radio" name="tipo" value="saida" checked={tipo === 'saida'} onChange={(e) => setTipo(e.target.value)} />
                    <span className='text-lg'>Saída</span>
                </label>
            </div>

            <button className='p-2 w-full    bg-green-500 rounded-sm text-white font-medium' type='submit'>Adicionar</button>
        </form>
    )
} 