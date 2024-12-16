export const LOGIN_STATUS = {
  PENDING: 'pending',
  NOT_LOGGED_IN: 'notLoggedIn',
  IS_LOGGED_IN: 'loggedIn',
};

export const SERVER = {
  AUTH_MISSING: 'auth-missing',
  AUTH_INSUFFICIENT: 'auth-insufficient',
  REQUIRED_USERNAME: 'required-username',
  INVALID_NAME: 'invalid-name',
  INVALID_PHONE: 'invalid-phone',
  INVALID_ADDRESS: 'invalid-address',
  INVALID_QUANTITY: 'invalid-quantity',
  INVALID_PRODUCTID: 'invalid-productId'
};

export const CLIENT = {
  NETWORK_ERROR: 'networkError',
  NO_SESSION: 'noSession',
};

export const MESSAGES = {
  [CLIENT.NETWORK_ERROR]: 'Trouble connecting to the network.  Please try again',
  [SERVER.AUTH_MISSING]: 'You must be logged in to access this page!',
  [SERVER.AUTH_INSUFFICIENT]: 'Your username/password combination does not match any records, please try again.',
  [SERVER.REQUIRED_USERNAME]: 'Please enter a valid (letters and/or numbers) username!',
  [SERVER.INVALID_PRODUCTID]: 'No such product exists',
  [SERVER.INVALID_NAME]: 'Name should only consist of letters!',
  [SERVER.INVALID_PHONE]: 'Phone number should consist of 10 digits',
  [SERVER.INVALID_ADDRESS] : 'Please enter a valid address! Only letters, numbers, spaces, commas, apostrophes and hyphens are allowed.',
  [SERVER.INVALID_QUANTITY] : 'Quantity must be a number between 0 and 10!',
  default: 'Something went wrong.  Please try again',
};

