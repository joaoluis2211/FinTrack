
export function ItemTransacao({ item, onRemover }) {
  return (
    <li className={`flex justify-between items-center p-3 border-l-4 border border-gray-400 rounded-lg  rounded-r-lg ${item.tipo === 'entrada' ? 'border-l-green-500' : 'border-l-red-500'}`}>
      <div>
        <p className="font-medium">{item.descricao}</p>
        <span className="text-xs">{new Date(item.id).toLocaleDateString('pt-BR')}</span>
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