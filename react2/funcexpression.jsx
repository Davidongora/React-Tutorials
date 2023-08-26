function capitalise(word) {
    return word[0].toUpperCase() + word.substring(1).toLowerCase();
}
const user = "bredan";
const element = <p className= "user-info" >welcome {capitalise(user)}</p>