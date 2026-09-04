import { useEffect, useState } from "react";
import ItemCardapio from "./components/ItemCardapio";
import TagDesconto from './components/TagDesconto';
import Interruptor from './components/Interruptor';
import "./App.css";

function App() {
  const [cardapio, setCardapio] = useState([]);
  const [itensCarrinho, setItensCarrinho] = useState(0);
  const [endereco, setEndereco] = useState("");
  const [modalAberto, setModalAberto] = useState(false);
  const [mensagemModal, setMensagemModal] = useState("");

  useEffect(() => {
    console.log("Conectando ao servidor...");
    setTimeout(() => {
      setCardapio([
        { id: 1, nome: 'X-Bacon Duplo', descricao: 'Duas carnes e muito bacon.', preco: 35.00 },
        { id: 2, nome: 'Pizza Calabresa', descricao: 'Tamanho média com 8 pedaços.', preco: 45.00 },
        { id: 3, nome: 'Suco de Laranja', descricao: 'Copo de 500ml natural.', preco: 8.00 },
        { id: 4, nome: 'Batata com Cheddar', descricao: 'Porção crocante com cheddar cremoso.', preco: 18.00 },
        { id: 101, nome: "Combo Master", descricao: "Dois lanches + refri 2L", preco: 65.00 },
        { id: 102, nome: "Hambúrguer de Grão de Bico", descricao: "Opção Vegana", preco: 28.00 },
        { id: 103, nome: "Açaí na Tigela", descricao: "500ml com morango e leite condensado", preco: 18.00 },
        { id: 104, nome: "Pizza de Calabresa", descricao: "Massa fina com calabresa e cebola", preco: 35.00 },
        { id: 105, nome: "Coxinha de Frango", descricao: "Crocante e recheada com frango desfiado", preco: 5.00  },
        { id: 106, nome: "Pastel de Queijo", descricao: "Massa fina e recheio de queijo", preco: 6.00 },
        { id: 107, nome: "Suco Natural de Laranja", descricao: "300ml de suco fresco", preco: 7.00 },
        { id: 108, nome: "Sorvete de Chocolate", descricao: "Casquinha com sorvete de chocolate", preco: 4.00 }
      ]);
    }, 2000);
  }, []);

  function finalizarCompra() {
    if (itensCarrinho === 0) {
      setMensagemModal("Coloque algo no carrinho!");
      setModalAberto(true);
      return;
    }

    if (endereco.trim() === "") {
      setMensagemModal("Digite o endereço de entrega!");
      setModalAberto(true);
      return;
    }

    setMensagemModal("Pedido finalizado com sucesso!");
    setModalAberto(true);
    setItensCarrinho(0);
    setEndereco("");
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">Senai Delivery</p>
          <h1>Seu próximo pedido começa aqui.</h1>
        </div>
        <div className="cart-summary" aria-live="polite">
          <span>🛒</span>
          <strong>{itensCarrinho}</strong>
          <span>itens</span>
        </div>
      </header>

      <main>
      <section className="hero-panel">
          <div>
            <TagDesconto porcentagem="20" />
            <h2>Comida boa, sem complicação.</h2>
            <p>Escolha seus favoritos e receba tudo quentinho onde estiver.</p>
          </div>
          <Interruptor />
        </section>
        

        <nav className="category-nav" aria-label="Categorias do cardápio">
          {['Pizzas', 'Hambúrgueres', 'Bebidas', 'Sobremesas'].map((categoria) => (
            <button type="button" key={categoria}>{categoria}</button>
          ))}
        </nav>

      {modalAberto && (
        <div
          className="modal-backdrop"
          onClick={() => setModalAberto(false)}
          role="presentation"
        >
          <div
            className="modal"
            onClick={(event) => event.stopPropagation()}
            role="alertdialog"
            aria-modal="true"
          >
            <h3>{mensagemModal}</h3>
            <button type="button" onClick={() => setModalAberto(false)}>
              OK
            </button>
          </div>
        </div>
      )}

      <section className="menu-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Hoje no restaurante</p>
              <h2>Cardápio em destaque</h2>
            </div>
            <span>{cardapio.length} opções</span>
          </div>

      {cardapio.length === 0 ? (
        <h2>🔄 Carregando restaurante...</h2>
      ) : (
        <div className="menu-grid"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "16px",
            maxWidth: "1180px",
            margin: "0 auto"
          }}
        >
          {cardapio.map((item) => (
            <ItemCardapio
              key={item.id}
              nome={item.nome}
              descricao={item.descricao}
              preco={item.preco}
              adicionarItem={() => setItensCarrinho((quantidadeAnterior) => quantidadeAnterior + 1)}
            />
          ))}
        </div>
      )}
      </section>

      <section className="checkout-panel">
          <div>
            <p className="eyebrow">Última etapa</p>
            <h2>Onde devemos entregar?</h2>
          </div>
          <div className="checkout-form">
            <label htmlFor="endereco">Endereço de entrega</label>
            <input
              id="endereco"
              type="text"
              placeholder="Rua e número"
              value={endereco}
              onChange={(event) => setEndereco(event.target.value)}
            />
            <button type="button" onClick={finalizarCompra}>Finalizar pedido</button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
