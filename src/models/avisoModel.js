var database = require("../database/config");

function listar(idUsuario) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    //LISTANDO POSTS DE ACORDO COM O ID DO USUARIO E NA MESMA LISTAGEM VC FAZ A REQUISIÇÃO DE QUEM CURTIU OU NÃO
    var instrucao = `
        SELECT i.*,u.*,p.*, COUNT(it.fkPosts) as curtidas, 
            case when itUserLogado.fkUsuario is not null then 1 else 0 end as curtiu
                from igreja i 
                    join usuario u on i.idIgreja = u.fkIgreja
                        join posts p on u.idUsuario = p.fkUsuario
                        left join interacao it on p.idPosts = it.fkPosts   
                            left join interacao itUserLogado on p.idPosts = itUserLogado.fkPosts and itUserLogado. fkUsuario = ${idUsuario}
                                GROUP BY it.fkPosts
                                    order by p.dataAnuncio desc;
            
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function listarMaisCurtidas(idUsuario) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    //LISTANDO POSTS DE ACORDO COM O ID DO USUARIO E NA MESMA LISTAGEM VC FAZ A REQUISIÇÃO DE QUEM CURTIU OU NÃO
    var instrucao = `
        SELECT i.*,u.*,p.*, COUNT(it.fkPosts) as curtidas, 
            case when itUserLogado.fkUsuario is not null then 1 else 0 end as curtiu
                from igreja i 
                    join usuario u on i.idIgreja = u.fkIgreja
                        join posts p on u.idUsuario = p.fkUsuario
                        left join interacao it on p.idPosts = it.fkPosts   
                            left join interacao itUserLogado on p.idPosts = itUserLogado.fkPosts and itUserLogado. fkUsuario = ${idUsuario}
                                GROUP BY it.fkPosts
                                    order by curtidas;
            
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

async function cadastrarEvento(descricao, data, fkUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ",descricao, data, fkUsuario );
    var instrucao = `
        INSERT INTO posts (descricao, dataAnuncio,fkUsuario) VALUES ('${descricao}', '${data}', ${fkUsuario}); 
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    var linhaInserida = await database.executar(instrucao);

    instrucao = `INSERT INTO interacao (fkUsuario,fkPosts) VALUES (${fkUsuario}, ${linhaInserida.insertId})`;
    console.log("Executando a instrução SQL: \n" + instrucao); 
    database.executar(instrucao);
  
    return linhaInserida.insertId;
}

function IncrementarCurtida(fkUsuario, idPosts) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function IncrementarCurtida(): ", fkUsuario, idPosts);
    var instrucao = `
        INSERT INTO interacao (fkUsuario,fkPosts) VALUES (${fkUsuario},${idPosts});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function DecrementarCurtida(fkUsuario ,idPosts) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function DecrementarCurtida(): ",fkUsuario ,idPosts);
    var instrucao = `
        DELETE FROM interacao WHERE fkUsuario = ${fkUsuario} and fkPosts = ${idPosts};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}



module.exports = {
    listar,
    cadastrarEvento,
    IncrementarCurtida,
    DecrementarCurtida,
    listarMaisCurtidas
}
