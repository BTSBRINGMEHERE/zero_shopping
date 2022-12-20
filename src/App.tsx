import Router from "./router/Router"
import { Provider } from "react-redux"
import { store } from "./store/store"

function App() {
  return (
    <Provider store={store}>
      <main id="app" className="grid w-[100%] overflow-auto h-[100vh]">
        <Router />
      </main>
    </Provider>
  )
}

export default App
