import { React } from "react";

export function ResumoCard({titulo, valor, tipo}){
    const obterCor = () => {
        if (tipo === "entrada") return 'bg-green-50 text-green-700 border-green-200';
        if (tipo === "saida") return 'bg-red-50 text-red-700 border-red-200';
        return valor >= 0 ? 'bg-blue-50 text-blue-700 border-blue-200' : 'bg-amber-50 text-amber-700 border-amber-200';
    };

    return (
        <div className={`flex-1 p-6 rounded-xl border shadow-sm transition-all ${obterCor()}`}>
            <h3 className="text-sm font-medium uppercase tracking-wider opacity-80">{titulo}</h3>
            <p className="text-2xl font-bold mt-2">{valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}
            </p>
        </div>
    )
}