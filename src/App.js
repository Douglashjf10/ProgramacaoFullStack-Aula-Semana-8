import React from "react";
import axios from "axios";

const listar = () => {
    axios.get('http://localhost:3005/alunos').then(
        resultado => {
            console.log("Listar todos:", resultado.data);
        }
    ).catch(error => {
        console.error("Erro ao listar alunos:", error);
    });
}

const consultarUnico = id => {
    axios.get(`http://localhost:3005/alunos/${id}`).then(
        resultado => {
            console.log("Aluno encontrado:", resultado.data);
        }
    ).catch(error => {
        console.error("Erro ao consultar aluno:", error);
    });
}

const excluir = id => {
    axios.delete(`http://localhost:3005/alunos/${id}`).then(
        resultado => {
            console.log(`Aluno ${id} excluído com status:`, resultado.status);
        }
    ).catch(error => {
        console.error("Erro ao excluir aluno:", error);
    });
}

const inserir = () => {
    const aluno = { id: "5", nome: 'Daniela', matricula: '130' };
    axios.post('http://localhost:3005/alunos', aluno).then(
        resultado => {
            console.log("Aluno inserido com status:", resultado.status);
        }
    ).catch(error => {
        console.error("Erro ao inserir aluno:", error);
    });
}

const alterar = id => {
    axios.get(`http://localhost:3005/alunos/${id}`).then(
        resultado => {
            let aluno = resultado.data;
            aluno.nome += ' (alterado)';
            axios.put(`http://localhost:3005/alunos/${id}`, aluno).then(
                resultado => console.log(`Aluno ${id} alterado com status:`, resultado.status)
            ).catch(error => {
                console.error("Erro ao alterar aluno:", error);
            });
        }
    ).catch(error => {
        console.error("Erro ao buscar aluno para alteração:", error);
    });
}

const App = () => {
    return (
        <div>
            <h1>CRUD de Alunos</h1>
            <button onClick={listar}>Listar Todos</button>
            <button onClick={() => consultarUnico("1")}>Consultar Aluno 1</button>
            <button onClick={inserir}>Inserir Novo Aluno</button>
            <button onClick={() => alterar(1)}>Alterar Aluno 1</button>
            <button onClick={() => excluir("3")}>Excluir Aluno 3</button>
        </div>
    );
}

export default App;
