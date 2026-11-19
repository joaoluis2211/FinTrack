
import { useFinance } from "../contexts/FinanceContext";
import { ItemTransacao } from "./ItemTransacao";

export function ListaTransacoes() {
    const { transacoes, removerTransacao } = useFinance();

    const transacoesOrdenadas = [...transacoes].sort((a, b) => {
        const dataA = a.data
            ? new Date(`${a.data}T00:00:00`).getTime()
            : Number(a.id);

        const dataB = b.data
            ? new Date(`${b.data}T00:00:00`).getTime()
            : Number(b.id);

        return dataB - dataA;
    });
    return (
        <div className="flex flex-col w-full bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-neutral-900">
                    Histórico de Transações
                </h2>

                <span className="text-sm text-gray-500">
                    {transacoes.length} {transacoes.length === 1 ? 'registro' : 'registros'}
                </span>
            </div>

            {transacoesOrdenadas.length > 0 ? (
                <ul className="divide-y divide-gray-100">
                    {transacoesOrdenadas.map((item) => (
                        <ItemTransacao
                            key={item.id}
                            item={item}
                            removerTransacao={removerTransacao}
                        />
                    ))}
                </ul>
            ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                    <p className="text-neutral-700 font-medium">
                        Nenhuma transação cadastrada
                    </p>

                    <p className="text-sm text-gray-500 mt-2">
                        Suas movimentações financeiras aparecerão aqui.
                    </p>
                </div>
            )}
        </div>
    );
}
