import { react } from "react";
import Caracteres from "./components/Caracteres.jsx";
import ListaCaracteres from "./components/ListaCaracteres.jsx";




function App() {
  return <div className="bg-dark text-white">
      <h1 className="text-center display-1 py-4">Rick and Morty</h1>
      <ListaCaracteres/>
  </div>
}
export default App
