import convertText from "module.js";

let resetSW = false;

// チェックボックスのステータスを取得
const getStatus = () => {
    const checkBoxes = document.op.checkBox;
    let status = {};
    for(let box of checkBoxes) {
        // status.push(box.checked);
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

    // let checkSW = [false, false];
    // let cb = document.op.checkBox;

    // for (let i = 0; i < cb.length; i++) {
    //     if (cb[i].checked) {
    //     checkSW[i] = true;    
    //     // console.log(cb[i].value + "が選択されました。");
    //     // console.log(checkSW);
    //     }
    // }

    // let sourceText = document.getElementById("source").value;
    // let result = "";

    // // 改行処理
    // if (checkSW[0] === true) {
    //     sourceText = sourceText.replace(/\n/g, "<br>\n");
    // }

    // if (checkSW[1] === true) {
    //     sourceText = sourceText.replace(/\n/g, "\\n");
    // }

    // // 傍点処理
    // if (checkSW[2] === true) {
    //     let slicedWords = new Array();
    //     let i = 0;
    //     let startBranket = 0;
    //     let endBranket = 0;
    //     let emp = "";
    //     let temp = "";
    //     let deleter = "";
    //     startBranket = sourceText.indexOf("《《");
    //     endBranket = sourceText.indexOf("》》");
        
    //     console.log(startBranket);
        
    //     // 《《が冒頭に来る場合は「0」、存在しない場合は「-1」
    //     while (startBranket >= 0) {
    //     if (startBranket >= 0 && endBranket > startBranket) {
    //         result += sourceText.slice(0, startBranket);
    //         // console.log(result);
    //         // startBranket -= 1000000000;
    //         // break;
            
    //         emp = sourceText.slice(startBranket + 2, endBranket);
    //         deleter = sourceText.slice(0, endBranket + 2);
    //         sourceText = sourceText.replace(deleter, "");

    //         for (let j = 0; j < emp.length; j++) {
    //         temp += "<ruby><rb>" + emp.slice(j, j + 1) + "</rb><rp>（</rp><rt>・</rt><rp>）</rp></ruby>";
    //         }  

    //         result += temp;
    //         temp = "";
    //         startBranket = sourceText.indexOf("《《");
    //         endBranket = sourceText.indexOf("》》");

    //     } else {
    //         if (endBranket < startBranket) {
    //         alert("何か……間違ってます。");
    //         }
    //         break;
    //     }
    //     }

    //     result += sourceText;
        
    //     // result = sourceText.slice(0, startBranket - 1);
    //     // result += "《《";
    //     // result += sourceText.slice(startBranket + 2, endBranket);
    //     // result += "》》";
    //     console.log("result:" + result);
    //     console.log("emp:" + emp);
    //     console.log("deleter:" + deleter);
    //     console.log("temp:" + temp);
    //     console.log("sourceText:" + sourceText);
    //     console.log("startBranket:" + startBranket);
    //     console.log("endBranket:" + endBranket);
    //     // console.log(sourceText);



    //     // sliceWords[i] = sourceText.slice(0, startBranket - 1);
    //     // sliceWords[i+1] = "《《";
    //     // sliceWords[i+2] = sourceText.slice(0, startBranket - 1);
    
    
    
    
    //     // console.log(result.indexOf("《《")); // 12
    //     // console.log(result.indexOf("》》")); // 23
    //     // console.log(result.indexOf("お")); // 14
    // } else {
    //     let result = sourceText;
    // }


  
    // // ルビ処理
    // if (checkSW[3] === true) {
    //     result = result.replace(/｜/g, "<ruby><rb>");
    //     result = result.replace(/\|/g, "<ruby><rb>");
    //     result = result.replace(/《/g, "</rb><rp>（</rp><rt>");
    //     result = result.replace(/》/g, "</rt><rp>）</rp></ruby>");
    // }

    // console.log(result);
    // $("#html").val(result);

    // let $checked = $("#option[name=checkBox]:checked");
    // let letList = $checked.map(function(index, el) {
    //   return $(this).val();
    // });
    // console.log(letList);
    // console.log($checked);
});

$("#reset").click(() => {
    // 値を設定
    $("#source").val("｜堕天男《ルシファー》");
    $("#html").val("<RUBY><RB>堕天男</RB><RP>（</RP><RT>ルシファー</RT><RP>）</RP></RUBY><br>");
});

