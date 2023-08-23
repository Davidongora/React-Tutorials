function getNavbar(user) {
    return <div>Logged in as {user.firstName} {user.lastName}. Log out </div>

}

// sample usage (do not modify)
const element = getNavbar({
    firstName: "Sam",
    lastName: "Dung",
    age: 27
});
console.log(element);
