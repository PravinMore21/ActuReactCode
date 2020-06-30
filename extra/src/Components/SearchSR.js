import React, { Component } from "react";
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';


function SearchSR() {

	// constructor(props) {
	// 	super(props);
	// 	this.try = this.try.bind(this)
	//   }
	//   try = () => {
	// 	alert();
	// 	<div>
	// 	  <Router>
	// 		<Route path="/hello" component={Hello} />
	// 	  </Router>
	// 	</div>
	//   }
	
		return (

        	<div  className = "sr-div">
          		<form className = "sr-form">
					  <table>
						<thead>
							<th>
								Task name
							</th>
							<th>
								SR Number
							</th>
							<th>
								Select
							</th>
						</thead>
						<tbody>
							<tr>
								<td>
									Address Change
								</td>
								<td>
									SR56789
								</td>
								<td>
									<div className="align-center-div">
										<div className="search-button">
											<Link to="/customerdetails">Claim</Link>
										</div>
									</div>
								</td>
							</tr>
						</tbody>
					  </table>
					{/* <h4>Search By</h4>
           			<label for="fname">Customer Name:</label>
            		<input type="text" id="fname" name="fname"/>
					<h4>Or</h4>
            		<label for="lname">Customer Id:</label><br />
            		<input type="text" id="lname" name="lname" /> */}
          		</form>
				
			</div>
		);
	}

export default SearchSR;