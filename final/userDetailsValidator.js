function isNameValid(name) {
     return name.match(/^[A-Za-z\s]+$/);
}
  
function isPhoneValid(phone) {
    return phone.match(/^[0-9]{10}$/);
}

function isAddressValid(address) {
    return address.match(/^[a-zA-Z0-9\s,'-]+$/);
}

export default {
    isNameValid,
    isPhoneValid,
    isAddressValid
};
  