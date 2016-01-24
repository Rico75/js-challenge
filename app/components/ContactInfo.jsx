var React = require("react");
var actions = require("../actions/ContactActions");
var FontAwesome = require("react-fontawesome");

module.exports = React.createClass({
    deleteContact: function (e) {
        e.preventDefault();
        actions.deleteContact(this.props.info);
    },
    render: function () {
        return (
            <tr>
                <td>{this.props.info.FirstName}</td>
                <td>{this.props.info.LastName}</td>
                <td>{this.props.info.DOB}</td>
                <td>{this.props.info.Phone}</td>
                <td>{this.props.info.Address}</td>
                <td>{this.props.info.Notes}</td>
                <td><span className="pull-right text-uppercase delete-button" onClick={this.deleteContact}><FontAwesome name="trash-o" size='2x' /></span>
                </td>
            </tr>
        )
    }
})
