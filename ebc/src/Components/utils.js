

async function fetchLogin(pUserName, pPassword){
 
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: pUserName, password : pPassword })
        
       
    };
    // alert("sending " + requestOptions.body);
    const res = await fetch('https://webdev.talos.net.nz/~hannahmarie-wilson/api/login', requestOptions);
    return res;
}

export async function login({ username, password }) {
  return new Promise((resolve, reject) => {
    fetchLogin(username,password)
    .then( res => res.json())
    .then(data => {
      // alert("DATA IS"+data); // JSON data parsed by `data.json()` call
      let resultObj = (JSON.parse(data))[0];
      if(resultObj.Result !== 1 )
          reject();
      else 
          resolve();
    })
    ; 
  });
}
