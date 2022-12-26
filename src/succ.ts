"use strict";

import discord from "discord.js";

async function init(time: number) {
  let counter: number = 0;

  let gigachad1: string =
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.wp.com%2Fmelmagazine.com%2Fwp-content%2Fuploads%2F2021%2F01%2FGigachad.jpg&f=1&nofb=1&ipt=a2f36fe31703152ccaa5d1be79c603c7113453661abb8b13dcf5ef5b9a8f6860&ipo=images";
  let gigachad2: string =
    "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi0.kym-cdn.com%2Fphotos%2Fimages%2Foriginal%2F001%2F370%2F940%2F66f.jpg&f=1&nofb=1&ipt=23da9fc4d9b75fac38d794f6f6b84381c645275fc6969217ab99b310cc7c38f3&ipo=images";

  console.log("[Webhook Succ] ==> Getting ready to do the fucky!");

  let tokens = [
    {
      id: "1050210105586626610",
      token:
        "ObFfZ0w2PNwNk5ZMQzMA1zYT_ZGGqFTfq_xCHfZEULjhvifJwBr0WTm4z8FH3lJgXc2G",
    },
    {
      id: "1050210254509580288",
      token:
        "2oAWOtgirwMq4qADGPJjTk5lEHdMaaLF3OEZupJ7fMwAi-HQSC7vMWppy7rjwrngFFLC",
    },
    {
      id: "1050210356766720122",
      token:
        "PAyhAf3fTBGni1vldYqQLSEUwcSqPnJBIQMVssYhRj2jAsX_MfkO881MvoRLD_stok_8",
    },
    {
      id: "1056827651060400229",
      token:
        "-cu32ZOr4KHzJmhLElMoA728ZzVPjYMqVA1Opg1nicPLggHA_iHcPZNVvYGfcv5wxx6e",
    },
  ];

  tokens.forEach(async (i) => {
    console.log(`[Webhook Succ] ==> Looping through webhook tokens`, i);

    setInterval(async () => {
      console.log("[Webhook Succ] ==> Created webhook client");
      counter++;

      let webhookClient = new discord.WebhookClient({
        id: i.id,
        token: i.token,
      });

      let embed = new discord.EmbedBuilder()
        .setAuthor({
          name: "better than u",
          iconURL: gigachad2 as string,
        })
        .setTitle("Yikes! im inside ur mom")
        .setDescription(
          "bro, you gotta be smarter than this. do you need some help? do you know what a backend is? Join, we will show u da way! https://discord.gg/http\n\n`TODO: Allow all of this shit to be set on jit on jit bc they wont have sauce nigga i on fo'nem`"
        )
        .setColor("#ff0000");

      await webhookClient
        .send({
          content: `Sent ${counter} messages!`,
          username: "ur mom",
          avatarURL: gigachad1 as string,
          embeds: [embed],
        })
        .catch((e) => {
          return console.error(e);
        });

      console.log(`[Webhook Succ] ==> Sent shit to ${i.id}`);

      return console.log(
        `[Webhook Succ] ==> Sent ${counter} total webhook messages.`
      );
    }, time);
  });
}

init(10000);
