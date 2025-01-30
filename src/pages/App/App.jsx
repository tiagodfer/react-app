import { useRef } from 'react'
import { useState } from 'react'
import { v4 } from 'uuid'
import { AddButton, Container, Product } from './styles'

function App() {
    const input = useRef()
    const [products, setProducts] = useState([])

    function add() {
        setProducts([{
                id: v4(),
                name: input.current.value
                },
                ...products
            ])
            input.current.value = ''
    }

    function remove(id) {
        setProducts(
            products.filter(
                product => product.id !== id
            )
        )
    }

    return (
        <Container>
            <h1>Shopping List</h1>
            <input placeholder="product..." ref={input}/>
            <AddButton onClick={add}>Add</AddButton>
            {
                products.map(
                    (product) => (
                        <Product key={product.id}>
                        <p>{product.name}</p>
                        <button onClick={() => remove(product.id)}>Delete</button>
                        </Product>
                    )
                )
            }
        </Container>
    )
}
export default App
