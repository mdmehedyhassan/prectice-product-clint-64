import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Product = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios('http://localhost:5000/products')
            .then(data => setProducts(data.data))
        // fetch('http://localhost:5000/products')
        //     .then(res => res.json())
        //     .then(data => setProducts(data))
    }, []);
    const deleteProduct = id => {
        const confirmToDelete = window.confirm('Are you sure you want to delete this product?')
        if (confirmToDelete) {
            axios.delete(`http://localhost:5000/products/${id}`)
                .then(data => {
                    if (data.data.deletedCount === 1) {
                        const remainingProducts = products.filter(product => product._id !== id);
                        setProducts(remainingProducts)
                    }
                })
            // fetch(`http://localhost:5000/products/${id}`, {
            //     method: 'DELETE'
            // })
            //     .then(res => res.json())
            //     .then(data => {
            //         if (data.deletedCount === 1) {
            //             const remainingProducts = products.filter(product => product._id !== id);
            //             setProducts(remainingProducts)
            //         }
            //     })
        }
    }
    return (
        <div className="container">
            <h1>this is product</h1>
            <div className="row">
                {
                    products.map(product => <div
                        key={product._id} className="col-md-4">
                        <div style={{ borderRadius: '10px' }} className="mt-2 p-1 bg-secondary text-info">
                            <h4>Name: {product?.name}</h4>
                            <p><small>Category: {product?.category}</small></p>
                            <h5>Price: ${product?.price}</h5>
                            <p>Product stock available: {product?.quantity}</p>
                            <Link to={`/products/${product?._id}`}>
                                <button className="btn btn-primary form-control mt-2">Update</button>
                            </Link>
                            <button onClick={() => deleteProduct(product._id)} className="btn btn-danger form-control mt-2">Delete</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Product;