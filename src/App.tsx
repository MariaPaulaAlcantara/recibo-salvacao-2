import { useState } from 'react'
import './App.css'

function App() {
  const [nome, setNome] = useState('')
  const [mostrarRecibo, setMostrarRecibo] = useState(false)
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (nome.trim()) {
      setMostrarRecibo(true)
    }
  }
  
  const voltarParaFormulario = () => {
    setMostrarRecibo(false)
  }

  const anoAtual = new Date().getFullYear()

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center p-4">
      {!mostrarRecibo ? (
        <div className="recibo-container">
          <div className="bg-blue-500 p-6 text-center text-white">
            <h1 className="text-2xl font-bold mb-2">Bem-vindo à Igreja Batista Filadélfia</h1>
            <p className="text-lg">Verifique o preço que você tem que pagar para obter a salvação</p>
          </div>
          
          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="nome" className="block text-center text-lg font-medium text-gray-700">
                  O seu nome
                </label>
                <input
                  type="text"
                  id="nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Introduza o seu nome"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Ver Recibo
              </button>
            </form>
          </div>
          
          <div className="p-4 text-center text-sm text-gray-500 border-t">
            © {anoAtual} | Juventude da Igreja Batista Filadélfia
          </div>
        </div>
      ) : (
        <div className="recibo-container">
          <div className="p-8 text-center">
            <h1 className="text-3xl font-bold mb-1">SALVAÇÃO</h1>
            <p className="text-lg font-medium mb-8">JESUS PAGOU TUDO</p>
            
            <div className="space-y-3 mb-8">
              <div className="recibo-item">
                <span className="font-medium">PECADOS</span>
                <span className="font-medium">PAGO</span>
              </div>
              <div className="recibo-item">
                <span className="font-medium">ERROS</span>
                <span className="font-medium">PAGO</span>
              </div>
              <div className="recibo-item">
                <span className="font-medium">MÁGOAS</span>
                <span className="font-medium">PAGO</span>
              </div>
              <div className="recibo-item">
                <span className="font-medium">IRA</span>
                <span className="font-medium">PAGO</span>
              </div>
              <div className="recibo-item">
                <span className="font-medium">TRANSGRESSÕES</span>
                <span className="font-medium">PAGO</span>
              </div>
              <div className="recibo-item">
                <span className="font-medium">MEDO</span>
                <span className="font-medium">PAGO</span>
              </div>
            </div>
            
            <div className="border-t border-b border-dashed py-4 mb-8">
              <div className="flex justify-between">
                <span className="font-medium">DÍVIDA</span>
                <span className="font-medium">PAGA</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">TROCO</span>
                <span className="font-medium">VIDA ETERNA</span>
              </div>
              <div className="mt-4 font-bold text-lg">
                SUB TOTAL***** R$0,00
              </div>
            </div>
            
            <p className="mb-6 text-center">
              O preço que Jesus pagou por <strong>{nome}</strong> foi o Seu precioso sangue derramado na cruz.
            </p>
            
            <p className="mb-6 text-center">
              Porque o salário do pecado é a morte, mas o dom gratuito de Deus é a vida eterna, por Cristo Jesus nosso Senhor.
            </p>
            
            <p className="mb-8 text-center font-medium">
              Romanos 6:23
            </p>
            
            <div className="flex justify-center mb-8">
              <svg
                className="h-16"
                viewBox="0 0 100 30"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Código de barras simplificado */}
                {Array.from({ length: 30 }).map((_, i) => (
                  <rect
                    key={i}
                    x={i * 3}
                    y={0}
                    width={2}
                    height={30}
                    fill={Math.random() > 0.5 ? 'black' : 'white'}
                  />
                ))}
              </svg>
            </div>
            
            <button
              onClick={voltarParaFormulario}
              className="bg-black text-white py-2 px-6 rounded-md hover:bg-gray-800 transition-colors"
            >
              Voltar
            </button>
          </div>
          
          <div className="p-4 text-center text-sm text-gray-500 border-t">
            © {anoAtual} | Juventude da Igreja Batista Filadélfia
          </div>
        </div>
      )}
    </div>
  )
}

export default App
