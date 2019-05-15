import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import ToDoItem from './'

describe('<ToDoItem />', () => {
    it('renders text', () => {
        const wrapper = shallow(<ToDoItem id={1} text={'123'} />)
        expect( wrapper.find('div').text() ).to.contain('123')
    })
})