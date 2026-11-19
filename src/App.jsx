
import { useState, useEffect } from 'react'
import { FinanceProvider } from './contexts'
import './App.css'
import { ListaTransacoes, ResumoCard, Navbar } from './components'
import { FormularioTransacao } from './components/FormularioTransacao'

function App() {
  const [transacoes, setTransacoes] = useState(() => {
    const transacoesSalvas = localStorage.getItem("transacoes")
    return transacoesSalvas ? JSON.parse(transacoesSalvas) : []
  })

  const adicionarTransacao = (transacao) => {
    setTransacoes((prev) => [...prev, { id: Date.now(), ...transacao }])
  }

  const removerTransacao = (id) => {
    setTransacoes((prev) => prev.filter((transacao) => transacao.id !== id))
  }

  const entrada = transacoes
    .filter((transacao) => transacao.tipo === "entrada")
    .reduce((total, transacao) => total + Number(transacao.valor), 0)

  const saida = transacoes
    .filter((transacao) => transacao.tipo === "saida")
    .reduce((total, transacao) => total + Number(transacao.valor), 0)

  const total = entrada - saida

  useEffect(() => {
    localStorage.setItem("transacoes", JSON.stringify(transacoes))
  }, [transacoes])

  
  return (
    <FinanceProvider value={{ adicionarTransacao, removerTransacao, transacoes, entrada, saida, total }}>
      <div className="min-h-screen bg-neutral-100">
        <header className="w-full bg-neutral-900">
          <Navbar />
        </header>

        <main className="max-w-7xl mx-auto w-full px-4 py-8 sm:px-6 lg:px-8">
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            <ResumoCard titulo="Entradas" valor={entrada} tipo="entrada" />
            <ResumoCard titulo="Saídas" valor={saida} tipo="saida" />
            <ResumoCard titulo="Saldo Total" valor={total} tipo="total" />
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            <FormularioTransacao />

            <ListaTransacoes />
          </section>
        </main>
      </div>
    </FinanceProvider>
  )
}

export default App
