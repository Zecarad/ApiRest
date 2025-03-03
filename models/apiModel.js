let users = [
    {id: 1, name: "Jose", email: "j@gmail.com"},
    {id: 2, name: "Eri", email: "e@gmail.com"}
];

const getUsers = () => users;

const getUsersById = (id) => users.find(users => users.id === id);

const addUsers = (name, email) => {
    const newUser = {id: users.length, name, email};
    users.push(newUser);
    return newUser;
};

const deleteUser = (id) => {
    const initialLength = users.length;
    users = users.filter(users => users.id !== id);
    return users.length < initialLength;
};

module.exports = { getUsers, getUsersById, addUsers, deleteUser}