const getPic = async (idLink)=>{
  try{
  const req = await fetch(idLink,{
    headers:{
      'accept':'text/html',
      'dpr':'10000000',
      'sec-fetch-site':'none',
      'user-agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36 Edg/123.0.2420.81'
      
    }
  })

  const res = await req.text();
  
const regex = /profilePicLarge":{"uri":"(.*?)"/;
const match = res.match(regex);
if (match) {
    const substring = eval(`\`${match[1]}\``); // This will contain the substring you're looking for
    return substring;
} else {
    return false;
}
  }catch(e){
    return false;
  }


 }

module.exports = {getPic}
