-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 07-Nov-2023 às 10:31
-- Versão do servidor: 10.4.28-MariaDB
-- versão do PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `inventory_tracking`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `artigo`
--

CREATE TABLE `artigo` (
  `id_artigo` int(11) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `id_categoria` int(11) DEFAULT NULL,
  `quantidade` int(11) DEFAULT NULL,
  `datainsercao` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `artigo`
--

INSERT INTO `artigo` (`id_artigo`, `nome`, `id_categoria`, `quantidade`, `datainsercao`) VALUES
(1, 'Smartphone', 1, 50, '2023-01-12'),
(2, 'Smartwatch', 1, 30, '2023-06-06'),
(3, 'Notebook', 1, 20, '2023-05-04'),
(4, 'Fone de Ouvido', 1, 40, '2023-03-11'),
(5, 'Tablet', 1, 25, '2023-08-01'),
(6, 'Camera', 1, 15, '2023-04-03'),
(7, 'TV', 1, 10, '2023-02-25'),
(8, 'Impressora', 1, 35, '2022-09-01'),
(9, 'Console de Videogame', 1, 45, '2022-10-11'),
(10, 'Carregador Portatil', 1, 60, '2022-12-04'),
(11, 'Camiseta', 2, 100, '2022-01-17'),
(12, 'Calca Jeans', 2, 80, '2022-05-09'),
(13, 'Vestido', 2, 70, '2023-03-07'),
(14, 'Tenis', 2, 90, '2023-05-09'),
(15, 'Jaqueta', 2, 60, '2022-10-13'),
(16, 'Blusa', 2, 110, '2022-06-18'),
(17, 'Bermuda', 2, 75, '2022-09-25'),
(18, 'Sapato Social', 2, 85, '2023-10-08'),
(19, 'Saia', 2, 65, '2023-05-19'),
(20, 'Moletom', 2, 55, '2023-04-20'),
(21, 'Livro', 3, 40, '2022-01-17'),
(22, 'Revista', 3, 60, '2022-03-20'),
(23, 'HQ', 3, 30, '2022-07-29'),
(24, 'Dicionario', 3, 25, '2023-02-12'),
(25, 'Romance', 3, 50, '2023-03-29'),
(26, 'Poesia', 3, 35, '2023-05-10'),
(27, 'Ficcao Cientifica', 3, 45, '2023-03-04'),
(28, 'Aventura', 3, 55, '2023-02-20'),
(29, 'Biografia', 3, 20, '2023-01-18'),
(30, 'Ebook', 3, 70, '2023-08-05'),
(31, 'Oculos de Sol', 4, 65, '2022-09-01'),
(32, 'Bolsa', 4, 80, '2022-10-04'),
(33, 'Relogio', 4, 50, '2023-08-12'),
(34, 'Chapeu', 4, 40, '2023-07-20'),
(35, 'Colar', 4, 75, '2022-07-04'),
(36, 'Pulseira', 4, 60, '2022-06-09'),
(37, 'Cinto', 4, 55, '2021-02-08'),
(38, 'Brinco', 4, 45, '2023-04-03'),
(39, 'Gravata', 4, 35, '2021-05-02'),
(40, 'Anel', 4, 70, '2021-08-10'),
(41, 'Sofa', 5, 25, '2023-01-11'),
(42, 'Mesa', 5, 40, '2023-04-12'),
(43, 'Cadeira', 5, 60, '2023-09-08'),
(44, 'Guarda-Roupa', 5, 30, '2023-11-05'),
(45, 'Escrivaninha', 5, 45, '2022-09-04'),
(46, 'Cama', 5, 50, '2022-12-11'),
(47, 'Criado-Mudo', 5, 35, '2022-12-19'),
(48, 'Estante', 5, 55, '2022-11-20'),
(49, 'Poltrona', 5, 20, '2021-07-13'),
(50, 'Mesa de Centro', 5, 65, '2021-07-19'),
(51, 'Arroz', 6, 70, '2021-09-20'),
(52, 'Feijao', 6, 85, '2021-11-06'),
(53, 'Macarrao', 6, 60, '2021-05-16'),
(54, 'Azeite', 6, 40, '2021-08-17'),
(55, 'Sal', 6, 75, '2022-05-10'),
(56, 'Acucar', 6, 50, '2022-06-10'),
(57, 'Cafe', 6, 55, '2022-10-12'),
(58, 'Farinha', 6, 65, '2023-04-03'),
(59, 'Leite', 6, 45, '2023-03-16'),
(60, 'Ovos', 6, 80, '2023-02-10'),
(61, 'Shampoo', 7, 40, '2021-04-05'),
(62, 'Condicionador', 7, 35, '2021-06-08'),
(63, 'Sabonete', 7, 50, '2021-05-10'),
(64, 'Creme Facial', 7, 60, '2022-10-19'),
(65, 'Perfume', 7, 45, '2023-09-23'),
(66, 'Maquiagem', 7, 55, '2022-11-24'),
(67, 'Hidratante', 7, 65, '2022-02-19'),
(68, 'Esfoliante', 7, 30, '2021-07-06'),
(69, 'Removedor de Maquiagem', 7, 70, '2021-11-12'),
(70, 'Tintura de Cabelo', 7, 25, '2023-07-17'),
(71, 'Bola', 8, 50, '2022-09-04'),
(72, 'Raquete', 8, 45, '2021-12-15'),
(73, 'Luvas de Boxe', 8, 40, '2021-05-06'),
(74, 'Caneleira', 8, 55, '2021-03-08'),
(75, 'Bicicleta', 8, 65, '2022-11-21'),
(76, 'Skate', 8, 35, '2022-11-25'),
(77, 'Taco de Baseball', 8, 30, '2023-12-16'),
(78, 'Rede de Vôlei', 8, 60, '2023-07-05'),
(79, 'Prancha de Surf', 8, 70, '2023-08-17'),
(80, 'Halteres', 8, 25, '2023-07-02'),
(81, 'Quebra-Cabeca', 9, 35, '2021-05-03'),
(82, 'Dama', 9, 40, '2021-06-04'),
(83, 'Baralho', 9, 30, '2021-03-01'),
(84, 'Xadrez', 9, 25, '2023-03-04'),
(85, 'Dominó', 9, 50, '2022-11-03'),
(86, 'Uno', 9, 55, '2022-07-03'),
(87, 'Ludo', 9, 45, '2021-03-05'),
(88, 'Detetive', 9, 60, '2022-01-02'),
(89, 'Banco Imobiliario', 9, 65, '2023-04-01'),
(90, 'War', 9, 70, '2021-06-18'),
(91, 'Martelo', 10, 50, '2021-02-08'),
(92, 'Chave de Fenda', 10, 60, '2021-06-17'),
(93, 'Serra', 10, 40, '2022-02-15'),
(94, 'Parafuso', 10, 35, '2022-07-06'),
(95, 'Broca', 10, 55, '2023-07-02'),
(96, 'Serrote', 10, 45, '2021-03-01'),
(97, 'Alicate', 10, 65, '2023-06-05'),
(98, 'Nivel', 10, 30, '2023-04-09'),
(99, 'Trena', 10, 70, '2022-01-01'),
(100, 'Prego', 10, 25, '2023-03-06');

-- --------------------------------------------------------

--
-- Estrutura da tabela `categoria`
--

CREATE TABLE `categoria` (
  `id_categoria` int(11) NOT NULL,
  `tipo` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `categoria`
--

INSERT INTO `categoria` (`id_categoria`, `tipo`) VALUES
(1, 'Eletronicos'),
(2, 'Roupas'),
(3, 'Livros'),
(4, 'Acessorios'),
(5, 'Moveis'),
(6, 'Alimentos'),
(7, 'Beleza'),
(8, 'Desporto'),
(9, 'Jogos'),
(10, 'Ferramentas');

-- --------------------------------------------------------

--
-- Estrutura da tabela `utilizador`
--

CREATE TABLE `utilizador` (
  `id_utilizador` int(11) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `artigo`
--
ALTER TABLE `artigo`
  ADD PRIMARY KEY (`id_artigo`),
  ADD KEY `id_categoria` (`id_categoria`);

--
-- Índices para tabela `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`id_categoria`);

--
-- Índices para tabela `utilizador`
--
ALTER TABLE `utilizador`
  ADD PRIMARY KEY (`id_utilizador`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `artigo`
--
ALTER TABLE `artigo`
  MODIFY `id_artigo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

--
-- AUTO_INCREMENT de tabela `categoria`
--
ALTER TABLE `categoria`
  MODIFY `id_categoria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de tabela `utilizador`
--
ALTER TABLE `utilizador`
  MODIFY `id_utilizador` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `artigo`
--
ALTER TABLE `artigo`
  ADD CONSTRAINT `artigo_ibfk_1` FOREIGN KEY (`id_categoria`) REFERENCES `categoria` (`id_categoria`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
