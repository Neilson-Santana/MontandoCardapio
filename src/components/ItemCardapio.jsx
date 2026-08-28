
function ItemCardapio({nome, descricao, preco, adicionarItem}) {

    return (
        <div style={{ border: "1px solid black", padding: "10px", width: "200px", textAlign: "center", margin: "10px", borderRadius: "10px", boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)" }}>
            <h2>{nome}</h2>
            <p>{descricao}</p>
            <p style={{ color: "green", fontWeight: "bold" }}>Preço: R$ {preco.toFixed(2)}</p>
            <button onClick={adicionarItem}>+ Adicionar</button>
        </div>
    )
}

export default ItemCardapio;