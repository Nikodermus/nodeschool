function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(submit => goodUsers.some(elem => submit.id === elem.id))
  };
}

module.exports = checkUsersValid;