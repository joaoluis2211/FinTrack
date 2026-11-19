
import { createContext, useContext } from "react";

const FinanceContext = createContext({
    transacoes: [],
    entrada: 0,
    saida: 0,
    total: 0,
    adicionarTransacao: () => {},
    removerTransacao: () => {}
});

export const useFinance = () => {
    return useContext(FinanceContext);
};

export const FinanceProvider = FinanceContext.Provider;
