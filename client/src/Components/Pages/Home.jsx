import React from 'react'

const Home = () => {

  let keys=localStorage.getItem("loginStatus")||"";
  
  const handleLogout=()=>{
    localStorage.removeItem("loginStatus");
    window.location.href="/login";
  }
  return (
    <div>
      <div>
        <h1>Welcome to my Page</h1>
         {
          keys && keys !="" ? <div>
            <h1>{keys}</h1>
            <button style={{background:"blue",padding:"10px",color:"white",borderRadius:"10px"}} onClick={handleLogout}>Logout</button>
            </div> : <h1>Please Login</h1>
         } 
      </div>
    </div>
  )
}

export default Home