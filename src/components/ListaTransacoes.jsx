import { useFinance } from "../contexts/FinanceContext";
import { ItemTransacao } from "./ItemTransacao"; // Importa o filho

export function ListaTransacoes() {
  const { transacoes, removerTransacao } = useFinance();

  return (
    <div className="flex flex-col w-full bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
      <h2 className="text-2xl mb-6 ">Histórico de Transações</h2>
      
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