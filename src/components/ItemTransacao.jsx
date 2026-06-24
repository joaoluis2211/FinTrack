
export function ItemTransacao({ item, onRemover }) {
  return (
    <li className="flex justify-between items-center p-3 border-l-4 bg-gray-50 rounded-r-lg border-gray-200">
      <div>
        <p className="font-medium text-gray-800">{item.descricao}</p>
        <span className="text-xs text-gray-400">{new Date(item.id).toLocaleDateString('pt-BR')}</span>
      </div>
      <div className="flex items-center gap-4">
        <span className={`font-bold ${item.tipo === 'entrada' ? 'text-green-600' : 'text-red-600'}`}>
          {item.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </span>
        <button onClick={() => onRemover(item.id)} className="text-gray-400 hover:text-red-500">❌</button>
      </div>
    </li>
  );
}