import React, { Component } from "react";

import axios from "axios";

class SearchSR extends Component {
    constructor(props) {
        console.log(props.match);
        super(props);
        this.state = {
            task_list: [],
        };
    }
    
    onClickHandler = (e) => {
        e.preventDefault();
        this.props.history.push("/customerdetails/" + e.target.value);
    };
    
    componentDidMount() {
        axios
            .get(process.env.REACT_APP_URL)
						 //https://jsonplaceholder.typicode.com/posts
            .then((response) => {
                console.log(response);
                this.setState({ task_list: response.data });
                console.log(this.state.task_list);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="sr-div">
                <form className="sr-form">
                    <table className="task-list">
                        <thead className="task-list-thead">
                            <th>Product Name</th>
                            <th>Product Code</th>
                            <th>Claim</th>
                        </thead>
                        <tbody className="task-list-tbody">
                            {this.state.task_list.length
                                ? this.state.task_list.map((task_list) => (
                                      <tr>
                                          <td>
                                              <label for="Title">{task_list.productname}</label>
                                          </td>

                                          <td>
                                              <label for="Title">{task_list.productCode}</label>
                                          </td>

                                          <td>
                                              <div className="align-center-div">
                                                  <div className="search-button">
                                                      <button className="claim-task" value={task_list.productCode} onClick={(e) => this.onClickHandler(e)}>
                                                          Claim
                                                      </button>
                                                  </div>
                                              </div>
                                          </td>
                                      </tr>
                                  ))
                                : null}
                        </tbody>
                    </table>
                </form>
            </div>
        );
    }
}

export default SearchSR;
