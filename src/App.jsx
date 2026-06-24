import { useState, useEffect} from 'react'
import { FinanceProvider } from './contexts'
import './App.css'
import { ListaTransacoes, ResumoCard } from './components';
import { FormularioTransacao } from './components/FormularioTransacao';

function App() {
  const [transacoes, setTransacoes] = useState(() => {
    const transacoesSalvas = localStorage.getItem("transacoes");
    return transacoesSalvas ? JSON.parse(transacoesSalvas) : [];
  });
  const [entrada, setEntrada] = useState(0);
  const [saida, setSaida] = useState(0);
  const [total, setTotal] = useState(0);


  const adicionarTransacao = (transacao) => {
    setTransacoes((prev) => ([...prev, {id: Date.now(), ...transacao}]));
  };

  const removerTransacao = (id) => {
    setTransacoes((prev) => (prev.filter((prevTransacao) => prevTransacao.id !== id)));
  }

  useEffect(() => {
    const totalEntradas = transacoes
      .filter(transacao => transacao.tipo === "entrada")
      .reduce((total, transacao) => total + Number(transacao.valor), 0); // Garante que é número

    const totalSaidas = transacoes
      .filter(transacao => transacao.tipo === "saida")
      .reduce((total, transacao) => total + Number(transacao.valor), 0);

    setEntrada(totalEntradas);
    setSaida(totalSaidas);
    setTotal(totalEntradas - totalSaidas);
  }, [transacoes]);

  useEffect(() => {
    localStorage.setItem("transacoes", JSON.stringify(transacoes));
  }, [transacoes]);

  return (
    <FinanceProvider value={{adicionarTransacao, removerTransacao, transacoes, entrada, saida, total}}>  
      <div className='flex flex-col items-center w-full'>
        <header>
          <h1 className='hidden'>FinTrack 💰</h1>
        </header>

        <section className='flex flex-col w-full items-center'>
          <FormularioTransacao  />
        </section>

        <div className='flex flex-col w-full items-center'>
          <ListaTransacoes />
        </div>

        <section className='flex w-full'>
          <ResumoCard titulo="Entradas" valor={entrada} tipo="entrada" />
          <ResumoCard titulo="Saídas" valor={saida} tipo="saida" />
          <ResumoCard titulo="Saldo Total" valor={total} tipo="total" />
        </section>
        
      </div>
    </FinanceProvider>  
  )
}

export default App
