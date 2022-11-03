
const prompt = require("prompt-sync")({sigint: true});

let text= " ";
text =prompt("text : ");
var Lock= parseInt(prompt("Lock: "))
let en='';
i=0;
charCode=0;

for(i=0; i<text.length;i++)
{
    charCode = text[i].charCodeAt();
    if (charCode >= 97 && charCode <= 122){
        charCode = 97 + (charCode - 97 + Lock) % 26;
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
    console.log(`Encrypted Text: ${en}`);

