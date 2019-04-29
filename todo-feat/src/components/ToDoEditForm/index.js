import React, { Component } from 'react'
import { get, update } from '../../helpers/toDoItemApi'
import { Formik } from 'formik'

class ToDoEditFrom extends Component {
    state = {
        toDoItem: null,
        fetched: false
    }

    itemId = () => this.props.match.params.itemId

    componentDidMount = async () => {
        const toDoItem = await get(this.itemId())
        console.log(toDoItem)

        this.setState({ toDoItem, fetched: true })
    }

    render() {
        return(
            <div>
                Edit form for {this.itemId()}
                {this.state.fetched
                    ? <Formik 
                        initialValues={{...this.state.toDoItem}}
                        onSubmit={values => {
                            // console.log(values)
                            update(this.itemId(), {...values})
                        }}
                        render={
                            ({
                            values,
                            errors,
                            touched,
                            handleBlur,
                            handleChange,
                            handleSubmit,
                            isSubmitting
                        }) => (
                            <form onSubmit={handleSubmit}>
                                <input 
                                    name='content'
                                    onChange={handleChange}
                                    value={values.content} 
                                    />
                                <br/>
                                <button type='submit'>Update</button>
                            </form>
                        )}
                    />
                    : <p>Loading...</p>
                }
            </div>
        )
    }
}

export default ToDoEditFrom