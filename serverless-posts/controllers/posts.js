const express = require('express');
const routes = express.Router({
    mergeParams: true
});

routes.post('/', (req, res) => {
    let {title, text, author} = req.body; 
    let array = req.body.array;

    console.log({title});
    console.log({text});
    console.log({author});

    if(!title || !text || !author)return res.status(400).json({"ok":false, "message":"All fields are required."});
    else if(title.length <= 5)return res.status(400).json({"ok":false, "message":"Title must be more than 5 characters."});
    else if(text.length <= 30)return res.status(400).json({"ok":false, "message":"Text field must be more than 30 characters."});
    else if(author.length <= 3)return res.status(400).json({"ok":false, "message":"Author name must be more than 3 characters."});

    let dateNow = prettyDate();
    let postObject = {"title":title,"text":text,"author":author, "date": dateNow}
    if(!array || array.length === 0){
        array = [postObject];
        return res.status(200).json({"ok":true, "arr": array});
    }

    let isNotNewTitle = array.filter(object => object.title === title);
    console.log({isNotNewTitle});
    if(isNotNewTitle.length !== 0) return res.status(400).json({"ok":false, "message":"The post is duplicated"});

    array.push(postObject);
    return res.status(200).json({"ok":true, "arr": array});
});


function prettyDate(){
    const t = new Date();
    const date = ('0' + t.getDate()).slice(-2);
    const month = ('0' + (t.getMonth() + 1)).slice(-2);
    const year = t.getFullYear();
    const hours = ('0' + t.getHours()).slice(-2);
    const minutes = ('0' + t.getMinutes()).slice(-2);
    const seconds = ('0' + t.getSeconds()).slice(-2);
    const time = `${date}/${month}/${year}, ${hours}:${minutes}:${seconds}`;
    return time;
}

module.exports = {
    routes
};