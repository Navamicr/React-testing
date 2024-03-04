import { render,screen } from "@testing-library/react"
import { Greet } from "./greet"
describe('Greet',()=>{
test('Greet renders correctly',()=>{
    render(<Greet/>)
    const textElement=screen.getByText(/Hello/)
    expect(textElement).toBeInTheDocument()
})
//.only and .skip to test and also to describe

describe('Nested',()=>{
    test('Greet renders with a name',()=>{
        render(<Greet name='Navami'/>)
        const textElement=screen.getByText("Hello Navami")
        expect(textElement).toBeInTheDocument()
    })
})

})