let users = [
    {id: 1, name: "Jose Miranda", email: "jose@gmail.com"},
    {id: 2, name: "Erika", email: "erika@gmail.com"}
];

const getUsers = () => users;

const getUserById = (id) => users.find(user => user.id ===id);

const addUsers = (name, email) => {
    const newUser = { id: users.length + 1, name, email };
    users.push(newUser);
    return newUser;
};

module.exports = { getUsers, getUserById, addUsers };