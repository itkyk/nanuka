const pageData = [
    {
        section: "kv",
        image: "https://picsum.photos/960/540",
        inputs: [
            {type: "textArea", maxLength: 100, title: "title", description: "ここがタイトル?!!だろぉ？!！", key: "title"},
            {type: "textArea", maxLength: 100, title: "description", description: "ここに説明を入力", key:"description"}
        ]
    },
    {
        section: "lead",
        image: "https://picsum.photos/960/540",
        inputs: [
            {type: "textArea", maxLength: 100, title: "title", description: "ここがタイトル", key: "title"},
            {type: "radio", title: "タグ", description: "必要なタグを選択", key: "checkBox", output: "string", boxes: [{default: false, value: "禿", key:"none"}, {default: true, value: "ふさふさ", key: "exists"}]},
            {type: "radio", title: "タグ", description: "必要なタグを選択", key: "sex", output: "boolean", boxes: [{default: false, value: "男", key:"male"}, {default: true, value: "女", key: "female"}]}
        ]
    }
]

module.exports = pageData;