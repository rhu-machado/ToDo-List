import React, { useState } from "react";
import * as S from "./Style.js";

function App() {
  const [tarefas, setTarefas] = useState("");
  const [lista, setLista] = useState([]);

  const add = { tarefas: tarefas, id: Date.now() };

  const handleClick = () => {
    if (tarefas !== "") {
      setLista([...lista, add]);
      setTarefas("");
    }
  };
  console.table(lista);

  const remover = (id) => {
    setLista(lista.filter((item) => item.id !== id));
  };
  console.log(tarefas);

  return (
    <S.Contain>
      <S.GlobalStyle />
      <S.H1>Lista de Coisas</S.H1>
      <S.Form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          value={tarefas}
          onChange={(e) => {
            setTarefas(e.target.value);
          }}
        />
        <button
          onClick={() => {
            handleClick();
          }}
        >
          ADICIONAR
        </button>
      </S.Form>
      <S.BackList>
        {lista.map((item) => (
          <S.BoxList key={item.id}>
            <ul>
              <li>{item.tarefas}</li>
            </ul>
            <button
              onClick={() => {
                remover(item.id);
              }}
            >
              x
            </button>
          </S.BoxList>
        ))}
      </S.BackList>
    </S.Contain>
  );
}

export default App;
