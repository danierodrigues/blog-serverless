const express = require('express');
const routes = express.Router({
    mergeParams: true
});


routes.post('/', (req, res) => {
    let newname = req.body.newname; 
    let array = req.body.array;

    if(!newname)return res.status(400).json({"ok":false, "message":"Author name is required."});
    else if(newname.length <= 3)return res.status(400).json({"ok":false, "message":"Author name must be more than 3 characters."});

    if(!array){
        array = [newname];
        return res.status(200).json({"ok":true, "arr": array});
    }

    let isNotNewName = array.filter(name => name === newname);

    if(isNotNewName.length !== 0) return res.status(400).json({"ok":false, "message":"Can't be 2 equal author name."});

    array.push(newname);
    return res.status(200).json({"ok":true, "arr": array});
});


module.exports = {
    routes
};