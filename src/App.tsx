import { Header } from "./Components/Header";

interface TeamProps {
  name: string;
  age?: string;
}

interface AboutProps {
  nome: string;
  idade?: string;
}

function App() {

  return (
    <>
      <Header/>
      <h1></h1>
    </>
  )
}

export default App
