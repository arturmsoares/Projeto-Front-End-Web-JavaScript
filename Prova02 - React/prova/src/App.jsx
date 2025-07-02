import SecaoUm from "./componentes/SecaoUm/SecaoUm";
import SecaoDois from "./componentes/SecaoDois/SecaoDois";
import SecaoFaq from "./componentes/SecaoFaq/SecaoFaq";
import style from "./App.module.css";



function App() {

  return (
    <>
    <div className={style.app}>
      <SecaoUm/>
      <SecaoDois/>
      <SecaoFaq/>


    </div>
    </>
  )
}

export default App
