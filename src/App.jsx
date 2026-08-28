//Vá no seu arquivo App.jsx e importe o useState.
//Crie um estado numérico chamado [itensCarrinho, setItensCarrinho] = useState(0).
//Lá no Header (Cabeçalho) do seu aplicativo, exiba esse número. (Exemplo: <h3>🛒 Carrinho: {itensCarrinho} itens</h3>).
//Lembra do .map() que varre o Banco de Dados e cospe os seus componentes <ItemCardapio>? Você precisará adicionar mais uma Prop chamada adicionarItem passando para ela uma Arrow Function que execute a soma: () => setItensCarrinho(itensCarrinho + 1).
//Agora vá no outro arquivo, o ItemCardapio.jsx.
//Na primeira linha da função, lá onde você recebe o nome, descricao e preco, avise o componente que ele agora recebe também a prop adicionarItem.
//No final do layout desse cardápio, desenhe um <button>+ Adicionar</button>.
//Coloque o evento onClick={adicionarItem} nesse botão.

import ItemCardapio from "./components/ItemCardapio";
import {useState} from "react";

const bancoDeDados = [
  { id: 1, nome: "X-Bacon Duplo", descricao: "Duas carnes e muito bacon.", preco: 35.00 },
  { id: 2, nome: "Pizza Calabresa", descricao: "Tamanho Média 8 pedaços.", preco: 45.00 },
  { id: 3, nome: "Suco de Laranja", descricao: "Copo 500ml natural.", preco: 8.00 },
  { id: 4, nome: "Pudim Caseiro", descricao: "Fatia caprichada com calda extra.", preco: 12.00 }
];

function App() {
  const [itensCarrinho, setItensCarrinho] = useState(0)
  
  return (
    <div>
      <h1>🍔 Cardápio do Delivery</h1>

      <h3>🛒 Carrinho: </h3>
      <div style={{border: "1px solid black", padding: "10px", width: "200px", textAlign: "center", margin: "10px auto", borderRadius: "10px", boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)"}}>
        <header>
        <h3>{itensCarrinho} itens</h3>
        </header>
      </div>

        <div style={{ display: "flex", justifyContent: "space-around" }}>
      {bancoDeDados.map((item) => (
        <ItemCardapio 
          key={item.id}
          nome={item.nome}
          descricao={item.descricao}
          preco={item.preco}
          adicionarItem={() => setItensCarrinho(itensCarrinho + 1)}
        />
      ))}
      </div>

    </div>
  )
}

export default App
