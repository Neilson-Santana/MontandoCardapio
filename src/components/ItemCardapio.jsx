function ItemCardapio({nome, descricao, preco}) {

    return (
        <div>
            <h2>{nome}</h2>
            <p>{descricao}</p>
            <p style={{ color: "green", fontWeight: "bold" }}>Preço: R$ {preco.toFixed(2)}</p>
        </div>
    )
}

export default ItemCardapio;