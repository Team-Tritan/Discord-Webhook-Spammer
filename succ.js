const discord = require("discord.js");

let webhooks = [
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
];

// TODO: Allow all of this shit to be set on jit on jit bc they wont have sauce nigga i on fo'nem
webhooks.forEach(async (i) => {
  setInterval(() => {
    let webhookClient = new discord.WebhookClient({ id: i.id, token: i.token });

    let embed = new discord.EmbedBuilder()
      .setTitle("Yikes! im inside ur mom")
      .setDescription(
        "bro, you gotta be smarter than this. do you need some help? do you know what a backend us? join, we will show u da way.gg/http"
      )
      .setColor("#ff0000");

    webhookClient.send({
      content: "backend???",
      username: "ur mom",
      avatarURL:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.wp.com%2Fmelmagazine.com%2Fwp-content%2Fuploads%2F2021%2F01%2FGigachad.jpg&f=1&nofb=1&ipt=a2f36fe31703152ccaa5d1be79c603c7113453661abb8b13dcf5ef5b9a8f6860&ipo=images",
      embeds: [embed],
    });

    console.log(`Sent to ${i.id}`);
  }, 10000);
});
