var React = require("react");
var ReactDOM = require("react-dom");
var ContactsList = require("./components/ContactList.jsx");
var ContactsStore = require("./stores/contactsStore");
var _contacts = [];
var getContactsCallback = function(contacts){
    _contacts = contacts;
    render();
};
ContactsStore.onChange(getContactsCallback);

function render(){
    ReactDOM.render(<ContactsList contacts={_contacts} />, document.getElementById("container"));
}
