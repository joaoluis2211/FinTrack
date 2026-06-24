import { useFinance } from "../contexts/FinanceContext";
import { ItemTransacao } from "./ItemTransacao"; // Importa o filho

export function ListaTransacoes() {
  const { transacoes, removerTransacao } = useFinance();

  return (
    <div className="flex flex-col w-3xl bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
      <h2 className="text-lg font-bold text-gray-900 mb-4">Histórico</h2>
      
      <ul className="space-y-3">
        {transacoes.map((item) => (
          // Passamos o 'item' e a função para o componente menor
          <ItemTransacao 
            key={item.id} 
            item={item} 
            onRemover={removerTransacao} 
          />
        ))}
      </ul>
    </div>
  );
}