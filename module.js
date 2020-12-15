// エラーログ用
const nameOfComponent = "novelConverter/module";

// 改行方式をチェック
const checkBrType = (text) => {
	if(text.indexOf("\r\n") > -1) {
		return "rn";
   	} else if(text.indexOf("\n") > -1) {
		return "n";
  	} else if(text.indexOf("\r") > -1) {
		return "r";
   	}
}

// 改行タグを追加（改行コードに応じて出力を変化）
const addBr = (text, checked) => {
	const brType = checkBrType(text);
	if(checked) {
		switch(brType) {
			case "rn":	return text.replace(/\r\n/g, "<br />\r\n");
			case "n":		return text.replace(/\n/g, "<br />\n");
			case "r":		return text.replace(/\r/g, "<br />\r");
			default: errorLog([brType], "brType", "addBr", nameOfComponent); break;
		}
	} else {
		return text;
	}
}

// ルビを追加
const setRubyOfDot = (letter) => {
	return "<ruby><rb>" + letter + "</rb><rp>（</rp><rt>・</rt><rp>）</rp></ruby>";
}

// 傍点を ruby タグで追加
const getRubiesOfDot = (word) => {
	let html = "";
	for(let i = 0; i < word.length; i++) {
		html += setRubyOfDot(word.slice(i, i + 1));
	}
	return html;
}

// 傍点指定がない場合の補正値
const getNoRubyWordOfDot = (start, end, text) => {
	if(end === 0) {
		return text.slice(0, start);
	} else {
		return text.slice(end + 3, start);
	}
}

// 青空文庫方式のルビ指定（｜仮名《かな》）を HTML タグ化
const convertRuby = (text, checked) => {
	if(text) {
		let result = text;
		if (checked) {
			result = result.replace(/｜/g, "<ruby><rb>");
			result = result.replace(/\|/g, "<ruby><rb>");
			result = result.replace(/《/g, "</rb><rp>（</rp><rt>");
			result = result.replace(/》/g, "</rt><rp>）</rp></ruby>");
		}
		return result;
	} else {
		errorLog([text], "text", "convertRuby", nameOfComponent);
	}
}

// 傍点指定記号を ruby タグに変換
const convertDot = (text, checked) => {
	if(text) {
		if (checked) {
			let _text = text; // 残りのテキスト
			let result = [];
			let start = text.indexOf("《《");
			let end = 0;
			if(start !== -1) {
				while(start > -1) {
					if(end === -1) { console.log("end at convertDot() in HTMLConverter/module.js is wrong -1."); return null; };
					result.push(getNoRubyWordOfDot(start, end, _text));
					end = _text.indexOf("》》");
					result.push(getRubiesOfDot(_text.slice(start + 2, end)));
					if((end + 3) <= _text.length) { _text = _text.slice(end + 3); }
					start = _text.indexOf("《《");
				}
				result.push(_text.slice(end + 3));
			} else {
				result.push(_text);
			}
			return result.join(); // Unify the array as string
		} else {
			return text;
		}
	} else {
		errorLog([text], "text", "convertDot", nameOfComponent);
	}
}

// 改行タグ、傍点追加指定記号変換、ルビ指定記号変換、の総括
const convertText = (text, status) => {
	if(text && status) {
		const textBr = addBr(text, status.br);
		const textDot = convertDot(textBr, status.dot);
		const textRb = convertRuby(textDot, status.rb);
		return textRb;
	} else {
		errorLog([text, status], "source, status", "convertText", nameOfComponent);
	}
}