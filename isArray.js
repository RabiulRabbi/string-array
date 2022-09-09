function megaFriend(friends){
    if(Array.isArray(friends) == false){
        return 'Please give an array';
    }
    let mega = friends[0];
    for(const friend of friends){
        if(friend.length > mega.length){
            mega = friend;
        }
    }
    return mega;
}


const friends = ['abdul','kuddus','rabiul','rakib'];
const myFriend = megaFriend(friends);
console.log(myFriend);