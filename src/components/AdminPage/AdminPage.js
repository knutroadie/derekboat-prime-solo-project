import React, { Component } from 'react';
import { connect } from 'react-redux';

class AdminPage extends Component {

    componentDidMount() {
        this.getUsers();
    }// end componentDidMount

    // Sends a signal to the saga listener to send the get request to the database
    getUsers = () => {
        this.props.dispatch({ type: 'GET_USERS' })
    }

    backToHome = () => {
        this.props.history.push('/')
    }

    deleteUser = (data) => {
        this.props.dispatch({
          type: 'DELETE_USER',
          payload: data
        })
      }

    render() {
        return (

            <div>
                    <h1>For Admin Eyes Only!</h1>
                        <button onClick={this.backToHome}>Back to Home</button>
                        <h1>List of users</h1>
                    {this.props.state.userList[0] ? (
                        <ul>
                            {this.props.state.userList.map(user => (
                                <div key={user.id} >
                                    <li>{user.username} <button onClick={() => this.deleteUser(user.id)}>DELETE</button></li>

                                </div>
                            ))}
                        </ul>
                    ) : (
                            <p>No Data</p>
                        )}
            </div>
        )
    };
}

const mapStateToProps = state => ({
    state,
});

export default connect(mapStateToProps)(AdminPage);



