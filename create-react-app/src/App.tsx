
// import { Application } from './components/application/application'
// import { Counter } from './components/counter/counter'
// import { Skills } from './components/skills/skills'

// const App = () => {
//   return (
//     <div>
//       {/* <Application/>
//       <Skills skills={['HTML','CSS','JavaScript']}/> */}
//       {/* <Counter/> */}
//     </div>
//   )
// }

// export default App

//================================================mui
import React from 'react'
import { AppProviders } from './providers/app-providers'
import { MuiMode } from './components/mui/mui-mode'

const App = () => {
  return (
    <AppProviders>
      <div className='App'>
        <MuiMode/>
      </div>
    </AppProviders>
  )
}

export default App