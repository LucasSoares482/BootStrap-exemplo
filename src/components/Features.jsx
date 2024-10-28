function Features() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-sm-3 mb-3 mb-sm-0">
          <div className="card text-bg-success">
            <div className="card-body">
              <h2 className="card-title text-center">
                <i class="bi bi-currency-dollar"></i>
              </h2>

              <p className="card-text">Compare e encontre melhores preços</p>
            </div>
          </div>
        </div>
        <div className="col-sm-3 mb-3 mb-sm-0">
          <div className="card text-bg-success">
            <div className="card-body">
              <h2 className="card-title text-center">
                <i class="bi bi-house-check"></i>
              </h2>
              <p className="card-text">
                Encontre locações com tudo o que você deseja
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-3 mb-3 mb-sm-0">
          <div className="card text-bg-success">
            <div className="card-body">
              <h2 className="card-title text-center">
                <i class="bi bi-alarm"></i>
              </h2>
              <p className="card-text">
                Compare rapidamente entre quartos disponíveis
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
