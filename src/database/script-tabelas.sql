-- Active: 1663943194633@@127.0.0.1@3306@arenajovem
CREATE DATABASE IF NOT EXISTS `arenaJovem` ;
USE `arenaJovem` ;
drop DATABASE arenaJovem;
CREATE TABLE IF NOT EXISTS `Igreja` (
  `idIgreja` INT PRIMARY KEY AUTO_INCREMENT,
  `nomeIgreja` VARCHAR(45) NOT NULL,
  `logradouro` VARCHAR(45) NOT NULL,
  `numero` INT NOT NULL,
  `CEP`char(9) NOT NULL,
  `cidade` VARCHAR(45) NOT NULL,
  `bairro` VARCHAR(45) NOT NULL,
  `pastor` VARCHAR(45) NULL
);
CREATE TABLE IF NOT EXISTS `Usuario` (
  `idUsuario` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `senha` VARCHAR(45) NOT NULL,
  `nome` VARCHAR(60) NOT NULL,
  `telefone` VARCHAR(11) NULL,
  `fkIgreja` INT NOT NULL,
  `fkLiderJovem` INT NULL,
    FOREIGN KEY (`fkIgreja`) REFERENCES `Igreja` (`idIgreja`),
    FOREIGN KEY (`fkLiderJovem`) REFERENCES `Usuario` (`idUsuario`)
);
CREATE UNIQUE INDEX FkLiderJovem_Igreja 
    ON usuario (fkIgreja, fkLiderJovem);

CREATE TABLE IF NOT EXISTS `Posts` (
  `idPosts` INT NOT NULL AUTO_INCREMENT,
  `descricao` VARCHAR(200) NOT NULL,
  `dataAnuncio` DATETIME NOT NULL,
  `curtidas` VARCHAR(45) DEFAULT 0 ,
  `fkUsuario` INT NOT NULL,
  PRIMARY KEY (`idPosts`, `fkUsuario`),
    FOREIGN KEY (`fkUsuario`) REFERENCES `Usuario` (`idUsuario`)
);

CREATE TABLE `interacao` (
  fkUsuario int,
  fkPosts int,
  Foreign Key (fkUsuario) REFERENCES Usuario(idUsuario),
  Foreign Key (fkPosts) REFERENCES Posts(idPosts),
  PRIMARY key (fkUsuario, fkPosts)
);
-- INSERTS 
INSERT INTO igreja VALUES
  (null,'IASD Vila Maria','RUA AMAMBAI',250,'02115-000','SÃO PAULO', 'Vila  Maria','Pr. Claudenir Custódio de Assis'),
  (null,'IASD Vila Medeiros','RUA REVERENDO ISRAEL VIEIRA FERREIRA',200,'02213-000','SÃO PAULO', 'Vila  Medeiros','PR. ROGÉRIO ARAÚJO'),
  (null,'IASD Vila Guilherme','RUA LAURINDO SBAMPATTO',444,'02076-040','SÃO PAULO', 'Vila  Guilherme','PR. ROGÉRIO ARAÚJO'),
  (null,'IASD Tucuruvi','RUA CRUZ DE MALTA', 1201 ,'02248-001','SÃO PAULO', 'Tucuruvi','Pr. William Pedro'),
  (null,'IASD Parque Novo Mundo','RUA SOLDADO SEBASTIÃO FELICIO',29,'02144-070','SÃO PAULO', 'Parque Novo Mundo','PR. ROGÉRIO ARAÚJO'),
  (null,'IASD Jardim Andaraí','RUA BENEDITA DORNELAS CLARO',328,'02168-020','SÃO PAULO', 'Parque Vila Maria','Pr. Claudenir Custódio de Assis');
