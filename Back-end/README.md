Crie um projeto modelo de API de um sistema de cadastro de veículos e abastecimentos, com as seguintes informações:

- Sistema de login com autenticação via CPF e senha;

- Cadastro de usuários - CRUD - com cpf e senha;

- Cadastro de veículos - CRUD -  com descrição do veículo (placa, renavam, cor, potência, modelo, marca etc);

- Cadastro de abastecimentos de veículos - CRUD -  com relacionamento do veículo, quantidade abastecida, tipo de combustível e valor;

- Listagem de veículos e abastecimentos em Datagrid - permitindo selecionar/editar/remover na própria grid.

Para tal, deve ser gerenciado estados da aplicação (um usuário não logado não pode cadastrar novos carros e nem abastecimentos). Além disso, dados como CPF, placas, devem ser válidos, não aceitando dados aleatórios.

Para isso use as seguintes tecnologias:
Frontend - React Js e MUI design - e demais a seu critério;
Backend - NodeJs - express, ORM:Prisma.io e banco de dados PostgreSql - e demais seu critério;
Opcional : uso de typescript - mas é um diferencial;