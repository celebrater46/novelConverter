// チェックボックスのステータスを取得
const getStatus = () => {
    const checkBoxes = document.op.checkBox;
    let status = {};
    for(let box of checkBoxes) {
        status[box.value] = box.checked;
    }
    return status;
}

// 全選択
$("#select").click(() => {
    $("#html").select();
});

// 変換をクリック
$("#convert").click(() => {
    const text = document.getElementById("source").value;
    const status = getStatus();
    const _text = convertText(text, status);
    $("#html").val(_text);
});

// 初期化
$("#reset").click(() => {
    $("#source").val("｜堕天男《ルシファー》");
    $("#html").val("<RUBY><RB>堕天男</RB><RP>（</RP><RT>ルシファー</RT><RP>）</RP></RUBY><br>");
});