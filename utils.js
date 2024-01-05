// もし空白の場合は データがないときに表示される文字にする
function getText(text) {
  return text != "" ? text : NoneText;
}

// DiscordのWebhookを使って Discordにメッセージを送信する
function sendDiscord(payload) {
  UrlFetchApp.fetch(WebhookURL, {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify(payload),
  });
}

// 現在の時間を取得
function getTime() {
  return Utilities.formatDate(new Date(), "GMT+9", "yyyy-MM-dd HH:mm:ss");
}
