import { describe,expect,it } from "vitest";
import { render,screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest"
import App from "./App";

describe('<App/>',()=>{
    it("checking h1 exist",()=>{
        render(<App/>)
        expect(screen.getByRole("heading")).toHaveTextContent("Hello")
    })



    // it("checking span exist",()=>{
    //     render(<App/>)
    //     expect(screen.getByTestId("span")).toBeInTheDocument()
    // })
})