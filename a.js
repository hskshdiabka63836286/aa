const makeRequest = async (link,cookie) => {
  try{
    const req = await fetch(id,{
      headers:{
        accept:'text/html',
        dpr:'100000',
        'user-agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36 Edg/123.0.2420.81',
        cookie
      }
    });
      const res = await req.text();
  
const regex = /profilePicLarge":{"uri":"(.*?)"/;
const match = res.match(regex);
    if(!match){
      return false;
    }
  }catch{
    return false;
  }
}

const getLink = async (link)=>{
  const cookie = 'c_user=61558439399202; xs=27%3AuENHDylv62yRUg%3A2%3A1712928445%3A-1%3A-1;'
  let res = await makeRequest(link);
  if(!res){
    res = makeRequest(link,cookie);
  }
  return res;
}

module.exports = {res}
