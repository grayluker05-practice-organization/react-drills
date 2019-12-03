import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Products extends Component {
    constructor(){
        super();

        this.state = {
            products: []
        }
    }

    componentDidMount(){
        axios.get("https://practiceapi.devmountain.com/products").then(res => {
            this.setState({
                products: res.data
            })
        })
    }

    render(){
        let products = this.state.products.map((item, i) => {
            return (
                <Link key={i} to={`/details/${item.id}`}>
                    <img width='200' src={item.image}/>
                </Link>
            )
        })
        return (
            <div>
                <h1>Products</h1>
                {products}
            </div>
        )
    }
}

export default Products