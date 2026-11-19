
import { useState } from 'react'
import { useFinance } from '../contexts'

function obterDataAtual() {
    const hoje = new Date()
    const ano = hoje.getFullYear()
    const mes = String(hoje.getMonth() + 1).padStart(2, '0')
    const dia = String(hoje.getDate()).padStart(2, '0')

    return `${ano}-${mes}-${dia}`
}

export function FormularioTransacao() {
    const { adicionarTransacao } = useFinance()

    const [descricao, setDescricao] = useState('')
    const [valor, setValor] = useState('')
    const [data, setData] = useState(obterDataAtual())
    const [tipo, setTipo] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!descricao.trim() || !valor || !data || !tipo) {
            return alert('Preencha todos os campos!')
        }

        if (Number(valor) <= 0) {
            return alert('O valor deve ser maior que zero!')
        }

        adicionarTransacao({
            descricao: descricao.trim(),
            valor: Number(valor),
            data,
            tipo
        })

        setDescricao('')
        setValor('')
        setData(obterDataAtual())
        setTipo('')
    }

    const estiloInput = "w-full min-h-11 px-3 rounded-lg border border-gray-300 bg-white text-neutral-800 outline-none transition focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100"

    return (
        <form
            className="flex flex-col w-full p-6 bg-white border border-gray-200 rounded-xl shadow-sm"
            onSubmit={handleSubmit}
        >
            <h2 className="text-xl font-bold text-neutral-900 mb-6">
                Nova Transação
            </h2>

            <div className="flex flex-col gap-2 mb-5">
                <label htmlFor="descricao" className="text-sm font-medium text-neutral-700">
                    Descrição
                </label>

                <input
                    id="descricao"
                    className={estiloInput}
                    type="text"
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    placeholder="Ex.: Conta de energia"
                    required
                />
            </div>

            <div className="flex flex-col gap-2 mb-5">
                <label htmlFor="valor" className="text-sm font-medium text-neutral-700">
                    Valor
                </label>

                <input
                    id="valor"
                    className={estiloInput}
                    type="number"
                    min="0.01"
                    step="0.01"
                    value={valor}
                    onChange={(e) => setValor(e.target.value)}
                    placeholder="0,00"
                    required
                />
            </div>

            <div className="flex flex-col gap-2 mb-5">
                <label htmlFor="data" className="text-sm font-medium text-neutral-700">
                    Data da transação
                </label>

                <input
                    id="data"
                    className={estiloInput}
                    type="date"
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                    required
                />
            </div>

            <div className="flex flex-col gap-3 mb-6">
                <span className="text-sm font-medium text-neutral-700">
                    Tipo de transação
                </span>

                <div className="flex gap-6">
                    <label className="flex items-center gap-2 cursor-pointer text-sm text-neutral-700">
                        <input
                            type="radio"
                            name="tipo"
                            value="entrada"
                            checked={tipo === 'entrada'}
                            onChange={(e) => setTipo(e.target.value)}
                            className="accent-yellow-400 w-4 h-4"
                            required
                        />
                        Entrada
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer text-sm text-neutral-700">
                        <input
                            type="radio"
                            name="tipo"
                            value="saida"
                            checked={tipo === 'saida'}
                            onChange={(e) => setTipo(e.target.value)}
                            className="accent-yellow-400 w-4 h-4"
                            required
                        />
                        Saída
                    </label>
                </div>
            </div>

            <button
                className="w-full min-h-11 bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 rounded-lg text-neutral-900 font-semibold transition-colors cursor-pointer"
                type="submit"
            >
                Adicionar transação
            </button>
        </form>
    )
}
