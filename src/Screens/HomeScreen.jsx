import React from 'react'
import { Link } from 'react-router-dom'
import data from '../data'

const HomeScreen = () => {
    return (
        <div>
            <h1>Featured Products!</h1>
            <div className="products">
                {
                    data.products.map((prod) => {
                        const { name, price, image, slug } = prod
                        return (
                            <>
                                <div className="product" key={slug}>

                                    <Link to={`/product/${slug}`} >
                                        <img src={image} alt={name} />
                                    </Link>

                                    <div className="product-info">
                                        <Link to={`/product/${slug}`} >
                                            <p>{name}</p>
                                        </Link>

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
        </div>
    )
}

export default HomeScreen