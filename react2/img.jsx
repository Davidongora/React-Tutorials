function getUserAvatar(path) {
    return <img src={path} />
}

// sample usage (do not modify)
const url = "https://res.cloudinary.com/dbfn5lnvx/image/upload/v1576923026/react-tutorial/misc/user.png";
console.log(getUserAvatar(url));

// thumb rule