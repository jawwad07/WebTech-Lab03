const userData= async ()=>{
    const response=await fetch('https://jsonplaceholder.typicode.com/users/1');
    const id=await response.json();
    console.log("User ID of ID ", id);

};

userData();