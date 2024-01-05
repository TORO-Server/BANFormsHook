// もし空白の場合は データがないときに表示される文字にする
function getText(text) {
  return text != "" ? text : NoneText;
}

// DiscordのWebhookを使って Discordにメッセージを送信する
function sendDiscord(json) {
  UrlFetchApp.fetch(WebhookURL, {
    method: "post",
    contentType: "application/json",
    payload: json,
  });
}

// 現在の時間を取得
function getTime(response) {
  return response.getTimestamp().toISOString();
}

// フィールド作成
function createFields(response) {
  // フィールド初期化
  let fields = [];

  // アイテムレスポンス取得
  const itemResponses = response.getItemResponses();

  // フィールドの内容 生成
  for (const itemRes of itemResponses) {
    fields.push({
      name: itemRes.getItem().getTitle(),
      value: getText(`${itemRes.getResponse()}`),
      inline: false,
    });
  }

  return fields;
}
