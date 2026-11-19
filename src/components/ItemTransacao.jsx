
export function ItemTransacao({ item, removerTransacao }) {
    const dataFormatada = item.data
        ? new Date(`${item.data}T00:00:00`).toLocaleDateString('pt-BR')
        : new Date(item.id).toLocaleDateString('pt-BR')

    const isEntrada = item.tipo === 'entrada'

    return (
        <li className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-4 border-b border-gray-100 last:border-0 hover:bg-neutral-50 transition-colors">
            <div className="flex flex-col gap-1 min-w-0">
                <h3 className="font-semibold text-neutral-800 truncate">
                    {item.descricao}
                </h3>

                <p className="text-sm text-gray-500">
                    {dataFormatada}
                </p>
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-4">
                <span
                    className={`font-semibold whitespace-nowrap ${
                        isEntrada ? 'text-green-600' : 'text-red-600'
                    }`}
                >
                    {isEntrada ? '+' : '-'}
                    {Number(item.valor).toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    })}
                </span>

                <button
                    onClick={() => removerTransacao(item.id)}
                    className="text-sm text-gray-400 hover:text-red-600 transition-colors cursor-pointer"
                    aria-label={`Remover ${item.descricao}`}
                >
                    Remover
                </button>
            </div>
        </li>
    )
}
