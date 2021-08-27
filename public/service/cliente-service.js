 
 const http = new XMLHttpRequest();

 http.open("GET", "http://localhost:3000" );

 http.send()

 http.onload = ()=>{
    const info = http.response
    console.log(info)
 }

 