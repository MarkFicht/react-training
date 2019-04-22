import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    background: #D9581C;
    color: #8C1500;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0px;
    outline: none;
    border-radius: 10px;
    font-weight: bold;
    font-size: 2em;
    height: 36px;
    width: 80px;
`

const TextInput = styled.input`
    padding: 5px 10px;
    font-size: 1.5em;
    font-weight: bold;
    background: #D9581C;
    color: #FFBF47;
    width: 100%;
    margin-right: 8px;
    border: 0px;
    -webkit-appearance: none;
`

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    border: 2px solid #FF836D;
    background: #D9581C;
    border-radius: 10px;
    padding: 5px;
`

const NewToDoForm = ({ onChange, draft, onSubmit }) => (
    <Container>
        <TextInput type='text' onChange={onChange} value={draft} />
        <Button onClick={onSubmit}>+</Button>
    </Container>
)

export default NewToDoForm