import data from "./data";


function App() {
  return (
    <div >
      <header>
        <a href="/"> Amazona </a>
      </header>
      <main>
        <h1>Featured Products!</h1>

        {/* 
        <div className="products" >
          {
            data.products.map((prod) => (
              <div className="product" >
                <img src={prod.image} alt={prod.name} />
                <p>
                  {prod.name}
                </p>
                <p>
                  {prod.price}
                </p>
              </div>
            ))
          }
        </div>  */}


        <div className="products">
          {
            data.products.map((prod) => {
              const { name, price, image, slug } = prod
              return (
                <>
                  <div className="product" key={slug}>

                    <a href={`/products/${slug}`} >
                      <img src={image} alt={name} />
                    </a>

                    <div className="product-info">
                      <a href={`/products/${slug}`} >
                        <p>{name}</p>
                      </a>

                      <p> <strong>{price}</strong>  </p>
                      <button>Add to Cart</button>

                    </div>
                  </div>
                </>
              )

            }

            )
          }
        </div>
      </main>
    </div>
  );
}

export default App;
