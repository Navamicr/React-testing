
//==================================================npm i vitest -D
//==================================================in package.json inside scripts, after build write new kwy value pair that is =>test:"vitest --coverage"
//==================================================npm i @testing-library/jest-dom @testing-library/react @testing-library/user-event jsdom -D
//==========add test key and its value into the defineConfig(vite.config.ts file) like below and save that setUpTests.ts file in src and add=>import "@testing-library/jest-dom/vitest"

//=== export default defineConfig({
//   plugins: [react()],
//   test:{
//     globals:true, //after adding this go to tsconfig.json,in linting ie below "noFallthruCasesInSwitch" add=>"types":["vitest/globals"]
//     environment:"jsdom",
//     setupFiles:"./src/setUpTests.ts"
//   }
// })
//===============if showing error while writing above add=> /// <referance types="vitest"/>
//==                                                        /// <referance types="vite/client"/>
// in the tsconfig.json inside "include" add=>,".src//setUpTests.ts"

//========================msw(for api calls)
//npm install -D msw (can see the msw in package.json inside devDependencies)
//go to github vite repo where go to vitest/examples/react-testing-lib-msw/src/mocks/ =>here see handlers.ts and server.ts make that folder in your project and add handlers do [handlers,server,setup files] copy content from create-react-app testing file








//==================================
// import React from 'react'
// import { add } from './utils/Helper'

// const App = () => {
//   return (
//     <div>
//       {add(1,1)}
//     </div>
//   )
// }

// export default App
//=======================================react components

import { Fragment } from "react"
const App = () => {
  return (
    <div>
      <Fragment>
        <h1>Hello</h1>
        <span data-testid="span">10</span>
      </Fragment>
    </div>
  )
}

export default App