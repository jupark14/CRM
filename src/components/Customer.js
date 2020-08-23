import React from 'react';


class Customer extends React.Component {
    render() {
        return (
            <div>
                <CustomerProfile id={this.props.id} name={this.props.name} image={this.props.image} />
                <CustomerInfo department={this.props.department} rank={this.props.rank} />
            </div>
        );
    }
}


class CustomerProfile extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.image} alt="profile" />
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        )
    }
}

class CustomerInfo extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.department}</p>
                <p>{this.props.rank}</p>
            </div>)
    }
}

export default Customer;