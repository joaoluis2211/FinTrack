
export function ResumoCard({ titulo, valor, tipo }) {
    const obterEstilo = () => {
        if (tipo === "entrada") {
            return {
                borda: "border-l-green-500",
                valor: "text-green-600"
            }
        }

        if (tipo === "saida") {
            return {
                borda: "border-l-red-500",
                valor: "text-red-600"
            }
        }

        return {
            borda: "border-l-yellow-400",
            valor: valor >= 0 ? "text-neutral-900" : "text-red-600"
        }
    }

    const estilo = obterEstilo()

    return (
        <div className={`flex-1 p-6 min-h-32 bg-white rounded-xl border border-gray-200 border-l-4 ${estilo.borda} shadow-sm transition-shadow hover:shadow-md`}>
            <h3 className="text-sm font-medium text-gray-500 tracking-wide">
                {titulo}
            </h3>

            <p className={`text-2xl font-bold mt-3 ${estilo.valor}`}>
                {valor.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                })}
            </p>
        </div>
    )
}
