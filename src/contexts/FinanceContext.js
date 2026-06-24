import { useEffect, useState, createContext, useContext } from "react";

const FinanceContext = createContext({
    transacoes: [{
        id: 1,
        descricao: "Salário",
        quantia: 5000,
        tipo: "entrada",
    }],
    entrada: 0,
    saida: 0,
    total: 0,

    adicionarTransacao: (transacao) => {},
    removerTransacao: (id) => {}
});

export const useFinance = () => {
    return useContext(FinanceContext);
}

export const FinanceProvider = FinanceContext.Provider;