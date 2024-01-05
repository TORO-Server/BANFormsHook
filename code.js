function getForms(e) {
  const mcid = getText(e.values[1]);
  const platform = getText(e.values[2]);
  const main_doc = getText(e.values[3]);
  const sub_doc = getText(e.values[4]);

  const payload = {
    embeds: {
      color: 8008641,
      timestamp: getTime(),
      fields: [
        {
          name: "MCID",
          value: mcid,
          inline: false,
        },
        {
          name: "プラットフォーム",
          value: platform,
          inline: false,
        },
        {
          name: "申請内容",
          value: main_doc,
          inline: false,
        },
        {
          name: "備考",
          value: sub_doc,
          inline: false,
        },
      ],
    },
  };

  // Discordに送信する
  sendDiscord(payload);
}
