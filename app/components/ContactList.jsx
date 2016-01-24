var React = require("react");
var Button = require("react-bootstrap").Button;
var ContactInfo = require("./ContactInfo.jsx");
var AddContact = require("./AddContact.jsx");
var Modal = require("react-bootstrap").Modal;
var FontAwesome = require("react-fontawesome");

module.exports = React.createClass({
    getInitialState() {
        return {
            showModal: false,
        };
    },
    close() {
        this.setState({showModal:false});
    },
    open() {
        this.setState({showModal:true});
    },
    render: function () {
        return (
            <div className="row">
                <div className="col-md-12 contact-btn-right ">
                    <Button className="btn" bsStyle="primary" bsSize="small" onClick={this.open}><FontAwesome
                        name="plus-circle"/>&nbsp;Contacts Keeper</Button>
                </div>
                <div className="col-md-12">
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead>
                            <tr className="table-heading-color">
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Date of Birth</th>
                                <th>Phone</th>
                                <th>Address</th>
                                <th>Notes</th>
                                <th>&nbsp;</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.props.contacts.map(function (s, index) {
                                    return (
                                        <ContactInfo info={s} key={"contact"+index}/>
                                    )
                                })
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
                <Modal show={this.state.showModal} onHide={this.close}>

                    <Modal.Header closeButton>
                        <Modal.Title>Contacts Keeper</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <AddContact
                            showModal={this}
                        />
                    </Modal.Body>

                </Modal>
            </div>
        )
    }
});
