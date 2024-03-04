import { describe,it,expect ,test} from "vitest";
import { add, fetchUser, isAuthenticated, reverseString, userDetails } from "./Helper";

describe("add function",()=>{
    test("returns 1+1=2",()=>{
        expect(add(1,1)).toBe(2);
    })
})
describe("add function",()=>{
    test("returns 1+1=2",()=>{
        expect(add('1','1')).toBe(0);
    })
})
describe("add function",()=>{
    test("returns 1+1=2",()=>{
        expect(add([1],[1])).toBe(0);
    })
})

describe("reverse function",()=>{
    it("returns reversed string",()=>{
        expect(reverseString("abc")).toBe("cba")
    })
})

//if it is array or obj use=> .toEqual
// describe("Object",()=>{
//     it("test user details",()=>{
//         expect(userDetails).toEqual({
//             name:"debug",
//             age:20,
//         })
//     })
// })

describe("Object",()=>{
    it("test user details",()=>{
        expect(userDetails).toHaveProperty("name")
        expect(userDetails).toHaveProperty("age")
    })
})

// 

describe("isAuthenticated",()=>{
    it("if user is logged in",()=>{
        expect(isAuthenticated(true)).toBeTruthy()
    })
    it("if user is not logged in",()=>{
        expect(()=>isAuthenticated(false)).toThrow()
    })
})