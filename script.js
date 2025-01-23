function firstWord(s) {
   //your code here
   if (s === "") {
        return "";
    }
    s = s.trim();
    let str="";
    let n=s.length;
    for(let i=0;i<n;i++)
    {
        if(s[i]===" ")
        {
            break;
        }
        str+=s[i];
    }
    return str;
 }
// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));
