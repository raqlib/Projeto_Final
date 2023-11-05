// Login Scripts

//   // Rota para verificar e retornar o registro
//   app.post('/verificar-usuario', (req, res) => {
//     const { email, password } = req.body;

//     // Consulta para verificar se o e-mail e a senha existem na tabela 'utilizador'
//     const query = 'SELECT * FROM utilizador WHERE email = ? AND password = ?';
//     connection.query(query, [email, password], (error, results) => {
//       if (error) {
//         res.status(500).send('Erro ao consultar o banco de dados');
//         throw error;
//       }
//   Aqui retorna a lista toda em vê de só um!
//       if (results.length > 0) {
//         res.json(results[0]); // Retorna o primeiro registro encontrado
//       } else {
//         res.status(404).send('Usuário não encontrado');
//       }
//     });
//   });

function login(event) {
  event.preventDefault();
  const utilizador = {
    email: event.target.emailLogin.value,
    password: event.target.passwordLogin.value,
  };
  sessionStorage.setItem("utilizador", JSON.stringify(utilizador));
  location.href = "index.html";

  //   utilizador = await getUtilizador();
  //   if (utilizador.lenght > 0) {
  //     // sessionStorage.setItem("utilizador", JSON.stringify(utilizador[0]));
  //     sessionStorage.setItem;
  //     location.href = index.html;
  //   } else {
  //     alert(
  //       "Utilizador não encontrado, email ou password erradas, ou não registado"
  //     );
  //   }
}

//   ChatGPT com try catch

//   // Função para fazer a requisição e obter o usuário
//   const verificarUsuario = async (email, password) => {
//     try {
//       const response = await fetch('/verificar-usuario', {
//         method: 'POST',
//         body: JSON.stringify({ email, password }),
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });

//       if (!response.ok) {
//         throw new Error('Erro ao verificar o usuário');
//       }

//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.error('Erro:', error);
//       return null;
//     }
//   };

//   // Função para lidar com a resposta e executar a lógica adequada
//   const lidarComResposta = async () => {
//     const email = 'email@example.com'; // Substitua pelo email
//     const password = 'senha123'; // Substitua pela senha

//     try {
//       const usuario = await verificarUsuario(email, password);

//       if (usuario) {
//         // Caso o usuário seja retornado com sucesso
//         console.log('Usuário retornado:', usuario);
//         // Realize ações necessárias após a autenticação bem-sucedida
//         // Por exemplo, armazenar no sessionStorage e redirecionar para outra página
//       } else {
//         // Se o usuário não foi retornado
//         console.log('Usuário não encontrado');
//         // Exiba uma mensagem de erro ou tome outra ação adequada
//       }
//     } catch (error) {
//       console.error('Erro ao lidar com a resposta:', error);
//       // Lidar com possíveis erros ao lidar com a resposta
//     }
//   };

//   // Chame a função para lidar com a resposta
//   lidarComResposta();
