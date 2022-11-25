
SELECT * FROM usuario;
desc posts;
drop DATABASE arenaJovem;
TRUNCATE table usuario;
SELECT * 
	from igreja i 
		join usuario u on i.idIgreja = u.fkIgreja
      join posts p on u.idUsuario = p.fkUsuario; 

insert into posts VALUES
  (null, 'EVENTO NA CASA VERDE', '2022-12-11 13:30:00', '20',1);
SELECT i.nome,p.descricao,i.logradouro,i.numero,i.CEP,i.cidade,i.bairro,p.curtidas,p.data  
	from igreja i 
		join usuario u on i.idIgreja = u.fkIgreja
      join posts p on p.idPosts = u.fkIgreja; 
select * from usuario;
insert into posts VALUES
  (null, 'Hj é Só estudar em casa mesmo', now(), 0, 1);

  ALTER TABLE posts CHANGE curtidas curtidas int DEFAULT 0;
  select * from usuario;

  select * from posts;

  select * from igreja i 
		join usuario u on i.idIgreja = u.fkIgreja
      join posts p on u.idUsuario = p.fkUsuario order by dataAnuncio desc; 
      truncate table posts;