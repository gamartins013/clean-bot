const YoutubeMp3Downloader = require("youtube-mp3-downloader");
const search = require("youtube-search");

async function play(client, args, message) {
  try {
    var YD = new YoutubeMp3Downloader({
      ffmpegPath: "C:/ffmpeg/bin/ffmpeg", // FFmpeg binary location
      outputPath: "./media/ytDown", // Output file location (default: the home directory)
      youtubeVideoQuality: "highestaudio", // Desired video quality (default: highestaudio)
      queueParallelism: 3, // Download parallelism (default: 1)
      progressTimeout: 1000, // Interval in ms for the progress reports (default: 1000)
      allowWebm: false, // Enable download from WebM sources (default: false)
    });

    var opts = {
      maxResults: 1,
      key: "AIzaSyARsUt7mpnrM__x-uA95qkKAArXop6j2Bo",
    };

    const pesq = args.slice(1).join(" ");
    search(pesq, opts, async function (err, results) {
      if (err) return console.log(err);
      console.log(`Estou baixando esse vídeo: `, (results[0].title));

      YD.download(results[0].id, results[0].id + ".mp3");
      client.reply(message.from, "Estou procurando o vídeo", message.id);
      client.reply(
        message.from,
        `
      Seu video é esse?
Titulo: ${results[0].title}
Link:  ${results[0].link}
Canal: ${results[0].channelTitle}
      `,
        message.id
      );

      YD.on("finished", function (err, data) {
        client.sendFile(message.from, `./media/ytDown/${results[0].id}.mp3`, message.id);
        console.log("Já enviei o vídeo...");
      });

      YD.on("error", function (error) {
        client.reply(
          message.from,
          "Não consegui baixar o video vei, muito grande esse ai",
          message.id
        );;
      });

      YD.on("progress", function (progress) {
        console.log(`
Calma ai que eu já baixei: ${progress.progress.percentage.toFixed(2)}%
Faltam apenas ${progress.progress.eta} segundos para terminar de baixar!!
              `);
      });
    });
  } catch (error) {
    console.error(error);
  }
}

module.exports = play;
