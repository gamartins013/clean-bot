const axios = require('axios');

async function covid(client, args, message) {
    try{
        axios
        .get(`https://coronavirus-19-api.herokuapp.com/countries/brazil`)
        .then((response) => {
          var data = response.data;
          client.reply(
            message.from,
            `🌎️ *Informações COVID-19 Brasil*\n\n✨️ *Total de Casos:* ${data.cases}\n☣️ *Total de Mortes:* ${data.deaths}\n⛩️ *Casos Ativos:* ${data.active}`,
            message.id
          );
        });
    }catch (e){
        console.log(e)
    }
}

module.exports = covid