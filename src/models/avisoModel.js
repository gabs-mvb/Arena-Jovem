var database = require("../database/config");

function listar() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    
    var instrucao = `
    SELECT * 
        from igreja i 
            join usuario u on i.idIgreja = u.fkIgreja
                join posts p on u.idUsuario = p.fkUsuario 
                    order by dataAnuncio desc;
    
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
    DecrementarCurtida
}
