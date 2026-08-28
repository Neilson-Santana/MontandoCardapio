import ItemCardapio from "./components/ItemCardapio";

const bancoDeDados = [
  { id: 1, nome: "X-Bacon Duplo", descricao: "Duas carnes e muito bacon.", preco: 35.00 },
  { id: 2, nome: "Pizza Calabresa", descricao: "Tamanho Média 8 pedaços.", preco: 45.00 },
  { id: 3, nome: "Suco de Laranja", descricao: "Copo 500ml natural.", preco: 8.00 },
  { id: 4, nome: "Pudim Caseiro", descricao: "Fatia caprichada com calda extra.", preco: 12.00 }
];

function App() {
  
  return (
    <>
        <h1>Senai Delivery</h1>
      {bancoDeDados.map((item) => (
        <ItemCardapio 
          key={item.id}
          nome={item.nome}
          descricao={item.descricao}
          preco={item.preco}
        />
      ))}
    </>
  )
}

export default App
