const { create, Client} = require('@open-wa/wa-automate')
const msgHandler = require('./msgHndlr')
const options = require('./config/options')

const start = async (client = new Client()) => {

        console.log('[SERVER] Servidor iniciado!')

        client.onStateChanged((state) => {
            console.log('[Status do cliente]', state)
            if (state === 'CONFLICT' || state === 'UNLAUNCHED') client.forceRefocus()
        })

        // listening on message
        client.onMessage((async (message) => {

            client.getAmountOfLoadedMessages()
            .then((msg) => {
                if (msg >= 3000) {
                    client.cutMsgCache()
                }
            })

            msgHandler(client, message)

        }))
        
}

create(options(true, start))
    .then(client => start(client))
    .catch((error) => console.log(error))
