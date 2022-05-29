const axios = require("axios");

async function consultaCep(client, args, message) {
  const cep = args[1];
  const url = `https://ws.apicep.com/cep/${cep}.json`;
  const getCep = await axios.get(url);
  await client.reply(
    message.from,
    `
*Rua:* ${getCep.data.address}
*Bairro:* ${getCep.data.district}
*Cidade:* ${getCep.data.city}
*Estado:* ${getCep.data.state}
*Cep:* ${getCep.data.code}
      `,
    message.id
  );
}

module.exports = consultaCep;
