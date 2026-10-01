const jogos = [
  {
    id: "mario",
    nome: "Super Mario Bros.",
    imagem: "/img/jogos/Mario_Series_Logo.svg.webp",
    alt: "Logo do Super Mario",
    descricao:
      "Jogo de plataforma onde Mario enfrenta desafios para salvar a Princesa Peach.",
    preco: "R$ 15,99",
  },

  {
    id: "pac-man",
    nome: "Pac-Man",
    imagem: "/img/jogos/Pac-Man.png",
    alt: "Logo do Pac-Man",
    descricao:
      "Clássico de arcade onde você come pontos e foge dos fantasmas.",
    preco: "R$ 9,99",
  },

  {
    id: "sonic",
    nome: "Sonic",
    imagem: "/img/jogos/SonicLOgo.png",
    alt: "Logo do Sonic",
    descricao:
      "Jogo de plataforma onde você corre, coleta anéis e enfrenta inimigos em alta velocidade.",
    preco: "R$ 3,99",
  },

  {
    id: "mario-kart",
    nome: "Mario Kart",
    imagem: "/img/jogos/Mario_kart_first_logo.png",
    alt: "Logo do Mario Kart",
    descricao:
      "Jogo de corrida onde você compete em pistas usando itens para atrapalhar os adversários.",
    preco: "R$ 5,99",
  },

  {
    id: "donkey-kong",
    nome: "Donkey Kong",
    imagem: "/img/jogos/Donkey-Kong-Logo-4.png",
    alt: "Logo do Donkey Kong",
    descricao:
      "Jogo de plataforma onde você enfrenta obstáculos e inimigos para salvar a princesa.",
    preco: "R$ 4,99",
  },

  {
    id: "mortal-kombat",
    nome: "Mortal Kombat",
    imagem: "/img/jogos/mortalk.jpg",
    alt: "Imagem do Mortal Kombat",
    descricao:
      "Jogo de luta onde você enfrenta adversários usando golpes e habilidades especiais.",
    preco: "R$ 6,99",
  },

  {
    id: "street-fighter",
    nome: "Street Fighter",
    imagem: "/img/jogos/Street-Fighter-Logo.png",
    alt: "Logo do Street Fighter",
    descricao:
      "Jogo de luta onde você enfrenta adversários usando golpes e técnicas especiais.",
    preco: "R$ 4,99",
  },

  {
    id: "tetris",
    nome: "Tetris",
    imagem: "/img/jogos/Tetris.png",
    alt: "Logo do Tetris",
    descricao:
      "Quebra-cabeça onde você encaixa peças para formar linhas e ganhar pontos.",
    preco: "R$ 3,99",
  },

  {
    id: "the-king-of-fighters-97",
    nome: "The King of Fighters '97",
    imagem: "/img/jogos/figthers.jpg",
    alt: "Imagem de The King of Fighters 97",
    descricao:
      "Jogo de luta onde equipes de lutadores enfrentam adversários em combates intensos.",
    preco: "R$ 4,99",
  },
];

function Jogos() {
  return (
    <section id="jogos" className="jogos-section">
      <div className="container py-5">

        <div className="text-center mb-5">

          <span className="badge rounded-pill text-bg-dark px-4 py-2">
            🕹️ CATÁLOGO RETRÔ
          </span>

          <h2 className="display-4 fw-bold mt-3">
            Jogos que marcaram gerações
          </h2>

          <p className="lead text-muted mx-auto jogos-intro">
            Reviva alguns dos maiores clássicos dos videogames e escolha
            seu próximo jogo para dar o play na nostalgia.
          </p>

        </div>

        <div className="catalogo">

          {jogos.map((jogo) => (
            <article
              className={`game-card ${jogo.id}`}
              key={jogo.id}
            >

              <img
                src={jogo.imagem}
                alt={jogo.alt}
              />

              <h3>{jogo.nome}</h3>

              <p className="descricao">
                {jogo.descricao}
              </p>

              <p className="preco">
                {jogo.preco}
              </p>

              <button type="button">
                Comprar
              </button>

            </article>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Jogos;