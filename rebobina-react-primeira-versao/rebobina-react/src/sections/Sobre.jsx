function Sobre() {
  return (
    <section id="sobre" className="sobre py-5">
      <div className="container py-4">
        <div className="text-center mb-5">
          <span className="badge rounded-pill text-bg-dark px-4 py-2">
            📼 NOSSA HISTÓRIA
          </span>

          <h2 className="display-5 fw-bold mt-3">
            Quatro pessoas. Uma loja. Mil histórias.
          </h2>

          <p className="text-muted sobre-intro">
            A Rebobina nasceu da vontade de transformar nostalgia em uma
            experiência digital.
          </p>
        </div>

        <div className="historia-box">
          <div className="row align-items-center g-5">
            <div className="col-lg-5 text-center">
              <div className="historia-fita">
                <div className="fita-topo">
                  <span>VHS</span>
                  <span>REBOBINA</span>
                </div>

                <div className="fita-corpo">
                  <div className="fita-rolo"></div>
                  <div className="fita-rolo"></div>
                </div>

                <div className="fita-nome">
                  PLAY • PAUSE • REWIND
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <span className="capitulo">CAPÍTULO 01</span>

              <h3 className="fw-bold mt-2">
                Uma ideia que ganhou forma
              </h3>

              <p>
                Quatro integrantes, diferentes ideias e uma missão em comum:
                criar uma loja online com aquele gostinho das antigas.
              </p>

              <p>
                Assim surgiu a Rebobina, reunindo filmes, séries, músicas
                e jogos em um só lugar.
              </p>

              <div className="palavra-rebobina">
                "DÊ O PLAY NA NOSTALGIA."
              </div>

              <p>
                Cada parte do projeto ficou nas mãos de um integrante.
                Cada página ganhou sua própria identidade e, juntas,
                elas formaram a nossa loja.
              </p>
            </div>
          </div>
        </div>

        <div className="integrante-box text-center mt-5">
          <span className="badge rounded-pill text-bg-dark px-4 py-2">
            🕹️ RESPONSABILIDADE
          </span>

          <h3 className="fw-bold mt-3">Samuel</h3>

          <p className="mb-2">
            Responsável pelo universo dos jogos e das músicas.
          </p>

          <strong>
            🕹️ Jogos &nbsp; • &nbsp; 🎵 Músicas
          </strong>
        </div>
      </div>
    </section>
  );
}

export default Sobre;