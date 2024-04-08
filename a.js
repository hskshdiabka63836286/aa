const getPic = (idLink)=>{
  fetch(idLink,{
    headers:{
      'accept':'text/html',
      'dpr':'1000',
      'sec-fetch-site':'none',
      'user-agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36 Edg/123.0.2420.81'
      
    }
  })
 .then(x=>{return x.text()})
 .then(res=>{
   
const regex = /profilePicLarge":{"uri":"(.*?)"/;
const match = res.match(regex);
if (match) {
    const substring = eval(`\`match[1]\``)/ // This will contain the substring you're looking for
    return sunstring;
} else {
    return false;
}

 })
}
