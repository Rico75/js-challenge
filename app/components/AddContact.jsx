var React = require("react");
var actions = require("../actions/ContactActions");

module.exports = React.createClass({
    getInitialState(){
      return {
          FirstName:"",
          LastName:"",
          DOB:"",
          Phone:"",
          Address:"",
          Notes:"",
      }
    },
    addContact(e){
        e.preventDefault();
        actions.addContact(this.state);
        this.props.showModal.close();
    },
    handleInputChange(e){
      e.preventDefault();
      var name = e.target.name;
      var state = this.state;
      state[name] = e.target.value;
      this.setState(state);
    },
    render(){
        return(
            <form className="form add-contact-form" onSubmit={this.addContact}>
                <div className="form-group">
                    <label className="control-label" htmlFor="FirstName">First Name:</label>
                    <input type="text" className="form-control" id="FirstName" name="FirstName" value={this.state.FirstName} onChange={this.handleInputChange} placeholder="First Name" />
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="LastName">Last Name:</label>
                    <input type="text" className="form-control" id="LastName" name="LastName" value={this.state.LastName} onChange={this.handleInputChange} placeholder="Last Name" />
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="DOB">Date of Birth:</label>
                    <input type="text" className="form-control" id="DOB" name="DOB" value={this.state.DOB} onChange={this.handleInputChange} placeholder="Date of Birth" />
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="Phone">Phone:</label>
                    <input type="text" className="form-control" id="Phone" name="Phone" value={this.state.Phone} onChange={this.handleInputChange} placeholder="Phone" />
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="Address">Address:</label>
                    <input type="text" className="form-control" id="Address" name="Address" value={this.state.Address} onChange={this.handleInputChange} placeholder="Address" />
                </div>
                <div className="form-group add-contact-notes">
                    <label className="control-label" htmlFor="Notes">Notes:</label>
                    <textarea
                          id="Notes"
                          name="Notes"
                          className="form-control"
                          onChange={this.handleInputChange}
                          value={this.state.Notes}       // required for reset form to work (only on textarea's)
                                                          // see: https://github.com/facebook/react/issues/2533
                        />
                </div>
                <div className="form-group">
                    <button className="btn" type="submit">Add Contact</button>
                </div>
            </form>
        )
    }
})