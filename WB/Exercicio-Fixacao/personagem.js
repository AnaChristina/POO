/*Todos os personagens deverão ser colocados em um Array.

No seu projeto, desenvolva um código que faça a comparação entre
cada personagem, ou seja, seus atributos. Utilize estruturas de
repetição (ex: for) para percorrer cada elemento do Array e fazer a
comparação.

Por fim, seu projeto deve imprimir a descrição de cada personagem
que esta sendo comparado e também apontar onde um personagem
"vence" (possui um valor maior no atributo numérico) */


const personagem = [
    {
        nome: "Steve Rogers",
        codinome: "Capitão América",
        armaPrincipal: "Escudo de Vibranium",
        armaSecundaria: "",
        velocidade: 85, // de 0 a 100
        forca: 80, // 0 a 100
        resistencia: 80, // 0 a 100
        descricao: function()
        {
            return "Nome do personagem: "+this.nome+"\n"
                +"Codinome: "+this.codinome+"\n"
                +"Arma principal: "+this.armaPrincipal+"\n"
                +"Arma secundaria: "+this.armaSecundaria+"\n"
                +"Nível de força: "+this.forca+"\n"
                +"Nível de velocidade: "+this.velocidade+"\n"
                +"Nivel de resistência: "+this.resistencia 
        }
    },

    {
        nome: "Tony Stark",
        codinome: "Homem de Ferro",
        armaPrincipal: "Armadura de ferro",
        armaSecundaria: "",
        velocidade: 85, // de 0 a 100
        forca: 60, // 0 a 100
        resistencia: 80, // 0 a 100
        descricao: function()
        {
            return "Nome do personagem: "+this.nome+"\n"
                +"Codinome: "+this.codinome+"\n"
                +"Arma principal: "+this.armaPrincipal+"\n"
                +"Arma secundaria: "+this.armaSecundaria+"\n"
                +"Nível de força: "+this.forca+"\n"
                +"Nível de velocidade: "+this.velocidade+"\n"
                +"Nivel de resistência: "+this.resistencia
        }
    },
    {
        nome: "Thor",
        codinome: "Thor",
        armaPrincipal: "Martelo",
        armaSecundaria: "",
        velocidade: 70, // de 0 a 100
        forca: 89, // 0 a 100
        resistencia: 70, // 0 a 100
        descricao: function()
        {
            return "Nome do personagem: "+this.nome+"\n"
                +"Codinome: "+this.codinome+"\n"
                +"Arma principal: "+this.armaPrincipal+"\n"
                +"Arma secundaria: "+this.armaSecundaria+"\n"
                +"Nível de força: "+this.forca+"\n"
                +"Nível de velocidade: "+this.velocidade+"\n"
                +"Nivel de resistência: "+this.resistencia
        }
    },

    {
        nome: "Natasha Romanoff",
        codinome: "Viuva Negra",
        armaPrincipal: "",
        armaSecundaria: "",
        velocidade: 60, // de 0 a 100
        forca: 70, // 0 a 100
        resistencia: 70, // 0 a 100
        descricao: function()
        {
            return "Nome do personagem: "+this.nome+"\n"
                +"Codinome: "+this.codinome+"\n"
                +"Arma principal: "+this.armaPrincipal+"\n"
                +"Arma secundaria: "+this.armaSecundaria+"\n"
                +"Nível de força: "+this.forca+"\n"
                +"Nível de velocidade: "+this.velocidade+"\n"
                +"Nivel de resistência: "+this.resistencia
        }
    },
    {
        nome: "Bruce Banner",
        codinome: "Hulk",
        armaPrincipal: "",
        armaSecundaria: "",
        velocidade: 50, // de 0 a 100
        forca: 90, // 0 a 100
        resistencia: 80, // 0 a 100
        descricao: function()
        {
            return "Nome do personagem: "+this.nome+"\n"
                +"Codinome: "+this.codinome+"\n"
                +"Arma principal: "+this.armaPrincipal+"\n"
                +"Arma secundaria: "+this.armaSecundaria+"\n"
                +"Nível de força: "+this.forca+"\n"
                +"Nível de velocidade: "+this.velocidade+"\n"
                +"Nivel de resistência: "+this.resistencia
        }
    },
    {
        nome: "Clint Barton",
        codinome: "Gavião Arqueiro",
        armaPrincipal: "Arco e Flecha",
        armaSecundaria: "",
        velocidade: 60, // de 0 a 100
        forca: 75, // 0 a 100
        resistencia: 80, // 0 a 100
        descricao: function()
        {
            return "Nome do personagem: "+this.nome+"\n"
                +"Codinome: "+this.codinome+"\n"
                +"Arma principal: "+this.armaPrincipal+"\n"
                +"Arma secundaria: "+this.armaSecundaria+"\n"
                +"Nível de força: "+this.forca+"\n"
                +"Nível de velocidade: "+this.velocidade+"\n"
                +"Nivel de resistência: "+this.resistencia
        }
    },
    {
        nome: "Thanos",
        codinome: "Thanos",
        armaPrincipal: "",
        armaSecundaria: "Manopola do Infinito",
        velocidade: 70, // de 0 a 100
        forca: 97, // 0 a 100
        resistencia: 80, // 0 a 100
        descricao: function()
        {
            return "Nome do personagem: "+this.nome+"\n"
                +"Codinome: "+this.codinome+"\n"
                +"Arma principal: "+this.armaPrincipal+"\n"
                +"Arma secundaria: "+this.armaSecundaria+"\n"
                +"Nível de força: "+this.forca+"\n"
                +"Nível de velocidade: "+this.velocidade+"\n"
                +"Nivel de resistência: "+this.resistencia
        }
    },
]

for (let i = 0; i < personagem.length; i++) 
{
    console.log(personagem[i].descricao()+"\n---------------------------------📍");
}




function compararAtributos(personagens, atributo) {
    console.log("Comparação de " + atributo + ":" + "\n");

    for (let i = 0; i < personagens.length; i++) 
    {
        const personagem1 = personagens[i];

        for (let j = i + 1; j < personagens.length; j++) {
            const personagem2 = personagens[j];

            console.log("Comparando " + personagem1.codinome + " com " + personagem2.codinome);

            if (personagem1[atributo] > personagem2[atributo]) 
            {
                console.log(personagem1.codinome + " vence em " + atributo + "🏆\n");
            }
            
            else if (personagem1[atributo] < personagem2[atributo]) {
                console.log(personagem2.codinome + " vence em " + atributo+"🏆\n");
            }
            
            else {
                console.log("Empate em " + atributo+ "🤝\n");
            }
        }
    }

    console.log("");
}

compararAtributos(personagem, "velocidade");
// compararAtributos(personagem, "forca");
// compararAtributos(personagem, "resistencia");