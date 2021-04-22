const express = require('express');
const app = express();
const segundaRota = require('./routes/segundaRota');

const host = 'localhost';
const port = 1357;
const url = `http://${host}:${port}`;

app.use(express.json());
app.use('/segundaRota', segundaRota);

app.get('/', (req, res) => {
    res.send(`
    <h1>Tabelinha HTTP Methods criada por <u>Vítor Leite</u></h1>
    </br><table>
    <tr>
      <th>ID</th>
      <th>Método HTTP</th>
      <th>Descrição</th>
    </tr>
    <tr>
      <td>1</td>
      <td>GET</td>
      <td>O método GET solicita a representação de um recurso específico. 
      Requisições utilizando o método GET devem retornar apenas dados.</td>
  
    </tr>
    <tr>
      <td>2</td>
      <td>POST</td>
      <td>O método POST é utilizado para submeter uma entidade a um recurso 
      específico, frequentemente causando uma mudança no estado do recurso 
      ou efeitos colaterais no servidor.</td>
    </tr>
    <tr>
      <td>3</td>
      <td>PUT</td>
      <td>O método PUT substitui todas as atuais representações do recurso 
      de destino pela carga de dados da requisição.</td>
    </tr>
    <tr>
      <td>4</td>
      <td>PATCH</td>
      <td>O método PATCH é utilizado para aplicar modificações parciais em um recurso.</td>
    </tr>
    <tr>
      <td>5</td>
      <td>DELETE</td>
      <td>Exclui o recurso especificado.</td>
    </tr>
  </table>
    `);
});

app.listen(port, () => {
    console.log(`\nServidor: ${url} está no ar.`);
})