const makeRequest = async (link,cookie) => {
  try{
    const req = await fetch(link,{
      headers:{
        accept:'text/html',
        dpr:'100000',
        'sec-fetch-site':'none',
        'user-agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36 Edg/123.0.2420.81',
        cookie
      }
    });
      const res = await req.text();
      return res;
  }catch{
    return false;
  }
    
}

const getLink = async (link)=>{
  const cookie = 'c_user=61558439399202; xs=27%3AuENHDylv62yRUg%3A2%3A1712928445%3A-1%3A-1;'
  let res = await makeRequest(link);
  
  if(!res){return false}
  let regex = /profilePicLarge":{"uri":"(.*?)"/;
  const match = res.match(regex);
  if(!match){
    res = await makeRequest(link,cookie);
  }
  if(!res){return false}
  
  const pp = eval(`\`${(res.match(regex))[1]}\``);
  regex = /image":{"uri":"(.*?)"/
  const cp = eval(`\`${(res.match(regex))[1]}\``);

  return {cp,pp}
  
  
  

  
}

  


module.exports = {getLink}
