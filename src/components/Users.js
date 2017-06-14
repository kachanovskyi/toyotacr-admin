import React, {Component} from 'react';
import './Users.css';

class Users extends Component {

    constructor() {
        super();
        this.state = {
            users: []
        };

        this.toggleBotActivation = this.toggleBotActivation.bind(this);
    };

    loadData() {
        fetch('./users.json')
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({users: responseJson});

            })
            .catch((error) => {
                console.error(error);
            });
    }

    toggleBotActivation({target}) {
        console.log(target);
    }

    componentDidMount() {
        this.loadData();
    }

    render() {
        return (
            <div className="Users">
                <div className="text-right excel-btn-container">
                    <a className="admin-btn">Exportar Excel</a>
                </div>
                <table>
                    <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Created At</th>
                        <th>Status</th>
                        <th>Bot activation</th>
                    </tr>
                    {this.state.users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.created}</td>
                            <td>{user.status}</td>
                            <td>

                                <a className={"admin-btn " + user.bot} onClick={this.toggleBotActivation}>
                                    { user.bot === "active" ? "Deactivate" : "Activate"}
                                </a>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );

    }
}

export default Users;
