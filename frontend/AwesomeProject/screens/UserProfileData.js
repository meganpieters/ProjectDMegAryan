var UserProfileData = (function() {
  var user_id = 0;
  var first_name, last_name, email, license_plate, is_admin = "";

  var getUserID = function() {
	  return user_id;
  };
  var getFirstName = function() {
	  return first_name;
  };
  var getLastName = function() {
	  return last_name;
  };
  var getEmail = function() {
	  return email;
  };
  var getLicensePlate = function() {
	  return license_plate;
  };
  var getIsAdmin = function() {
	  return is_admin;
  };

  var setUserID = function(id) {
	  user_id = id;
  };
  var setFirstName = function(name) {
	  first_name = name;
  };
  var setLastName = function(name) {
	  last_name = name;
  };
  var setEmail = function(email) {
	  email = email;
  };
  var setLicensePlate = function(plate) {
	  license_plate = plate;
  };
  var setIsAdmin = function(input) {
	  is_admin = input;
  };

  return {
	  getUserID: getUserID,
	  setUserID: setUserID,
	  setFirstName: setFirstName,
	  getFirstName: getFirstName,
	  setFirstName: setFirstName,
	  getLastName: setLastName,
	  setLastName: setLastName,
	  getEmail: getEmail,
	  setEmail: setEmail,
	  getLicensePlate: getLicensePlate,
	  setLicensePlate: setLicensePlate,
	  getIsAdmin: getIsAdmin,
	  setIsAdmin: setIsAdmin,
  };
})();

export default UserProfileData;
