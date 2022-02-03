import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductUpdate = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({})
    const nameRef = useRef();
    const categoryRef = useRef();
    const priceRef = useRef();
    const quantityRef = useRef();
    useEffect(() => {
        axios(`http://localhost:5000/products/${id}`)
        .then(data => setProduct(data.data))
        // fetch(`http://localhost:5000/products/${id}`)
        // .then(res => res.json())
        // .then(data => setProduct(data))
    },[id])

    const handleUpdateProduct = (e) => {
        const newProduct = {
            name: nameRef.current.value,
            category: categoryRef.current.value,
            price: priceRef.current.value,
            quantity: quantityRef.current.value || 1,
        };
        if (newProduct.price > 0 && newProduct.quantity > 0) {
            axios.put(`http://localhost:5000/products/${id}`, newProduct)
                .then(data => {
                    if (data.data.acknowledged) {
                        alert('Your product added successfully')
                        nameRef.current.value = '';
                        categoryRef.current.value = '';
                        priceRef.current.value = '';
                        quantityRef.current.value = '';
                    }
                })
            // fetch(`http://localhost:5000/products/${id}`, {
            //     method: 'PUT',
            //     body: JSON.stringify(newProduct),
            //     headers: {
            //         'Content-Type': 'application/json'
            //     }
            // })
            //     .then(res => res.json())
            //     .then(data => {
            //         if (data.acknowledged) {
            //             alert('Your product added successfully')
            //             nameRef.current.value = '';
            //             categoryRef.current.value = '';
            //             priceRef.current.value = '';
            //             quantityRef.current.value = '';
            //         }
            //     })
        }
        if (newProduct.price < 0) {
            alert('You can not set Negative Price')
        }
        if (newProduct.quantity < 0) {
            alert('You can not set Negative Quantity')
        }

        e.preventDefault();
    }
    return (
        <div className="container">
            <h1>Update your product: {id}</h1>
            <form className="bg-info p-4 text-dark mt-5" onSubmit={handleUpdateProduct}>
                <label htmlFor="name">Name: </label><input className="form-control" type="text" ref={nameRef} defaultValue={product.name} required /><br />
                <label htmlFor="category">Category: </label><input className="form-control" type="text" ref={categoryRef} defaultValue={product.category} required /><br />
                <label htmlFor="price">Price: </label><input className="form-control" type="number" ref={priceRef} defaultValue={product.price} required /><br />
                <label htmlFor="quantity">Quantity: </label><input className="form-control" type="number" ref={quantityRef} defaultValue={product.quantity} /><br />
                <input className="form-control btn btn-dark" type="submit" value="Update Product" />
            </form>
        </div>
    );
};

export default ProductUpdate;