import styled from 'styled-components'

export const AddButton = styled.button `
    background: #aaaaaa;
    color: #000;
    height: 35px;
    padding: 5px 10px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    margin-left: 10px;

    &:hover {
        opacity: 0.8;
    }
`

export const Container = styled.div `
    background: #444444;
    padding: 20px;
    border-radius: 10px;

    h1 {
        color: #fff;
    }

    input {
        height: 35px;
        border-radius: 5px;
        border: none;
        margin-top: 30px;
        outline: none;
        padding-left: 10px;
`

export const Product = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30px;
    background: #666666;
    border-radius: 5px;
    margin-top: 10px;
    padding: 0 10px;
`
