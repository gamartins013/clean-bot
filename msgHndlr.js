
module.exports = msgHandler = async (client, message) => {
  try {
    const {
      sender,
      isGroupMsg,
      chat,
      caption,
    } = message;
    let { body } = message;
    const { formattedTitle } = chat;
    let { pushname, verifiedName } = sender;
    pushname = pushname || verifiedName;
    const commands = caption || body || "";
    const falas = commands.toLowerCase();
    const command = commands.toLowerCase().split(" ")[0] || "";
    const args = commands.split(" ");

    console.log("----------------------------------------");
    const msgs = (message) => {
      if (command.startsWith("!")) {
        if (message.length >= 10) {
          return `${message.substr(0, 15)}`;
        } else {
          return `${message}`;
        }
      }
    };


    // pegar mensagens que comecem com "!" e mostrar no console.
    if (!isGroupMsg && command.startsWith("!"))
      console.log(
        "\x1b[1;31m~\x1b[1;37m>",
        "[\x1b[1;32mEXEC\x1b[1;37m]",
        (msgs(command)),
        "from",
        (pushname)
      );

    if (isGroupMsg && command.startsWith("!"))
      console.log(
        "\x1b[1;31m~\x1b[1;37m>",
        "[\x1b[1;32mEXEC\x1b[1;37m]",
        (msgs(command)),
        "from",
        (pushname),
        "in",
        (formattedTitle)
      );

    if (isGroupMsg && !command.startsWith("!"))
      console.log(
        "\x1b[1;33m~\x1b[1;37m>",
        "[\x1b[1;31mMSG\x1b[1;37m]",
        (body),
        "from",
        (pushname),
        "in",
        (formattedTitle)
      );


      console.log("FROM 		===>", (pushname));
      console.log("FROM_ID 	===>", chat.id);
      console.log("ARGUMENTOS	===>", (args));
      console.log("FALAS 		===>", (falas));
      console.log("COMANDO 	===>", (command));

    //switch case para usar quando o usuario digita apenas uma mensagem sem comando
    switch (falas) {
    }

    command.replaceAll("_", "");
    command.replaceAll("*", "");
    command.replaceAll("`", "");

    //switch case para usar com comandos !
    switch (command) {
    }
  } catch (err) {
    await client.sendText(`Puts, deu merda... Erro: ${err}`);

    console.log(("[ERROR]", "red"), err);
    client.kill().then((a) => console.log(a));
  }
};