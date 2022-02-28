const pageData = [
  {
    image: "https://picsum.photos/960/540",
    inputs: [
      {type: "textArea", maxLength: 100, fieldName: "title", description: "ここがタイトル?!!だろぉ？A!！"},
      {type: "textArea", maxLength: 100, fieldName: "description", description: "ここに説明を入力"}
    ]
  },
  {
    image: "https://picsum.photos/960/540",
    inputs: [
      {type: "input", maxLength: 100, fieldName: "title", description: "ここがタイトルa"},
      {type: "radio", fieldName: "タグ", description: "必要なタグを選択", checkBoxes: [{default: false, key: "禿"}, {default: true, key: "ふさふさ"}]}
    ]
  }
]

module.exports = pageData;