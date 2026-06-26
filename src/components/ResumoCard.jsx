import { React } from "react";

export function ResumoCard({titulo, valor, tipo}){
    const obterCor = () => {
        if (tipo === "entrada") return 'bg-green-50 border-green-400';
        if (tipo === "saida") return 'bg-red-50 border-red-400';
        return valor >= 0 ? 'bg-blue-50 border-blue-400' : 'bg-amber-50 text-amber-700 border-amber-200';
    };

    return (
        <div className={`flex-1 p-6 min-h-52 rounded-xl border shadow-sm transition-all ${obterCor()}`}>
            <h3 className="text-lg font-medium tracking-wider opacity-80">{titulo}</h3>
            <p className="text-2xl font-bold mt-2">{valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}
            </p>
        </div>
    )
}