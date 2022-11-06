
const prompt = require("prompt-sync")({sigint: true});

let plain_text= " ";
plain_text =prompt("text : ");
var Key= parseInt(prompt("Key: "))
let en='';
i=0;
charCode=0;

for(i=0; i<plain_text.length;i++)
{
    charCode = plain_text[i].charCodeAt();
    if (charCode >= 97 && charCode <= 122){
        charCode = 97 + (charCode - 97 + Key) % 26;
        //charCode += k % 26;
    }
    // else if(charCode > 122){
    //     charCode = (charCode - 122) + 96;
    // }
    else if (charCode >= 65 && charCode <= 90){
        charCode = 65 + (charCode - 65 + Lock) % 26;
    }
    en += String.fromCharCode(charCode);
}
    console.log(`Now convert into Ceasar Text: ${en}`);

