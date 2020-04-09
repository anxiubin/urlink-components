import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import URLinkLogo from './images/logo-urlink-full.png'

function Home() {
  return (
    <>
    <img className="logo-URLink" alt="URLink" src={URLinkLogo} style={{margin: 20, width: 155, height: 35}} />
    <div style={{margin: 10}}>
        <Button variant="contained" color="primary">
            <Link to="/urlink-components/Login" style={{color:"#fff", textDecorationLine: "none"}}>Login</Link>
        </Button>
    </div>
    <div style={{margin: 10}}>
        <Button variant="contained" color="primary">
            <Link to="/urlink-components/Signup" style={{color:"#fff", textDecorationLine: "none"}}>Signup</Link>
        </Button>  
    </div>
    </>
  );
}
export default Home;