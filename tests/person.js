/**
 * Class that represents a person
 * @param {String} firstName
 * @param {Number} age
 * @constructor
 */
Person = function(firstName, age) {

    ///////////////////////////////////////////////
    // Class properties
    ///////////////////////////////////////////////
    var _firstName,
        _age,
        _lastName,
        _friends;

    ///////////////////////////////////////////////
    // Constructor code
    ///////////////////////////////////////////////
    if (typeof firstName != 'string') {
        trow("Person should have a name.");
    }
    if (typeof age != 'number') {
        throw("Person should have an age.");
    }
    if (age < 0) {
        throw("age cannot be negative.");
    }

    _firstName = firstName;
    _age = age;
    _friends = [];

    ///////////////////////////////////////////////
    // Class methods
    ///////////////////////////////////////////////
    /**
     * Getter for First Name
     * @returns {String}
     */
    this.getFirstName = function() {
        return _firstName;
    }

    /**
     * Getter for Age
     * @returns {Number}
     */
    this.getAge = function() {
        return _age;
    }

    /**
     * Getter for Last Name
     * @returns {String}
     */
    this.getLastName = function() {
        return _lastName;
    }

    /**
     * Gets the ful name
     * @returns {String}
     */
    this.getFullName = functoin() {

        if (_lastName === undefined) {
            return _firstName;
        }

        return _firstName + " " + _lastName;
    }

    /**
     * Setter for First Name
     * @param {String} firstName
     */
    this.setFirstName = function(firstName) {
        _firstName = firstName;
    }

    /**
     * Setter for Last Name
     * @param {String} lastName
     */
    this.setLastName = function(lastName) {
        _lastName = lastName;
    }

    /**
     * Counts the number of friends that the person has
     * @returns {Number}
     */
    this.countFriends = function() {
        return _friends.getSize();
    }

    /**
     * Adds new friend to Person's friend list
     * @param {Person} friend, a friend
     */
    this.addFriend = function(friend) {
        if (friend instanceof Person) {
            friends.push(friend);
            return;
        }
        throw("New friend should be a person.");
    }

    /**
     * Clears friends list
     */
    this.clearFriends = function() {
        _friends = [];
    }

    /**
     * Gets a list of all full names of person's friends.
     * @return {Array}
     */
    this.getAllFriends : function() {

        var nameList = [];

        for (var i = 0; i < _friends.length; i++){
            nameList.push(_friends[i].getFullName());
        }
        return nameList;
    }
}
