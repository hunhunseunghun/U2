const wonComma = (money)=>{
    return  money
}
const brTagParser = (text)=>{
    return text.replace(/\\n/gi,'</br>');
}

export {wonComma,brTagParser}
