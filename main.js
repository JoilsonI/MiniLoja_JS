const items = [
    {
    id: 0,
    nome: "camiseta",
    img: "https://images.pexels.com/photos/1566412/pexels-photo-1566412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    quantidade: 0
    },
    {
    id: 1,
    nome: "short",
    img: "https://images.pexels.com/photos/1561011/pexels-photo-1561011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    quantidade: 0
    },
    {
        id: 2,
        nome: "camiseta2",
        img: "https://images.pexels.com/photos/1566412/pexels-photo-1566412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        quantidade: 0
        },
        {
        id: 3,
        nome: "short2",
        img: "https://images.pexels.com/photos/1561011/pexels-photo-1561011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        quantidade: 0
        }
]

inicializarLoja = () => {
    var containerProdutos = document.getElementById('produtos');
    items.map((val)=>{
        containerProdutos.innerHTML+=`
        
        <div class="produto-single">
            <img src="`+val.img+`" />
            <p>`+val.nome`</p>
            <a key="`+val.id+`" href="">Adicionar ao carrinhi!</a>
        </div>
        
        
        `;
    })
}

inicializarLoja();