import { useState } from 'react'
import { FinanceProvider } from './contexts'
import './App.css'

function App() {
  const [transacoes, setTransacoes] = useState(() => {
    const transacoesSalvas = localStorage.getItem("transacoes");
    return transacoesSalvas ? JSON.parse(transacoesSalvas) : [];
  });


  const adicionarTransacao = (transacao) => {
    setTransacoes([...transacoes, transacao]);
  };

  useEffect(() => {
    localStorage.setItem("transacoes", JSON.stringify(transacoes));
  }, [transacoes]);

  return (
    <FinanceProvider value={{adicionarTransacao, removerTransacao, transacoes, entrada, saida, total}}>  

    </FinanceProvider>
  )
}

export default App
