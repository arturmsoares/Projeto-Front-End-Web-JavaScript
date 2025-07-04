const showAllUsers = (usuarios) => {
    usuarios.forEach(user => console.log(user.nome));
}

const showUsersGender = (usuarios, gender) => {
    usuarios
    .filter(user => user.sexo == gender)
    .forEach(user => console.log(user.nome));
}


// export {showAllUsers, showUsersGender};

const manageUsers = {
    showAllUsers, 
    showUsersGender
}

export default manageUsers;