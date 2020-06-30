import React, { Component } from "react";
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import styled from "styled-components";

function Navi() {
	return (
        <div>
                <Link to='/'> Home </Link>                 
                <Link to='/About'> Search Service Request </Link>
                <Link to='/comingsoon'>New Product</Link>
            
        </div>
	);
	
}

export default Navi;