const route = require('express').Router();
const fs = require('fs');

route.post('/getuser', (req, res) => {
    var userData = JSON.parse(fs.readFileSync('api.json'));
    console.log(userData)
    var [bool, index] = validateUser(userData, req.body);
    console.log(bool)
    if(bool){
        res.send({data: userData[index]});
    }
    else{
        res.send({error: 'Incorrect Username and Password!'});
    }

});

route.post('/postuser', (req, res) => {
    var userData = JSON.parse(fs.readFileSync('api.json'));
    var bool = checkUnique(userData, req.body);
    if (!bool) {
        userData.push(req.body);
        fs.writeFileSync('api.json', JSON.stringify(userData));
        res.send({ message: "User Added Successfully!" });
    }
    else {
        res.send({ message: 'User Already Exists!' });
    }

});

route.post('/posttodo', (req, res)=>{
    var userData = JSON.parse(fs.readFileSync('api.json'));
    for(var i=0; i<userData.length;i++){
        if(userData[i].UName === req.body.currentUser.UName){
            userData[i].TodoList.push(req.body.Todo);
            fs.writeFileSync('api.json', JSON.stringify(userData));
            res.send({data: userData[i]});
        }
    }
});

route.post('/deletetodo', (req,res)=>{
    var userData = JSON.parse(fs.readFileSync('api.json'));
    for(var i=0; i<userData.length; i++){
        if(userData[i].UName === req.body.currentUser.UName){
            userData[i].TodoList = userData[i].TodoList.filter((arrItem, index)=>{
                return index !== req.body.id
            });
            fs.writeFileSync('api.json', JSON.stringify(userData));
            res.send({data: userData[i]});
        }
    }
})

const checkUnique = (userData, user) => {
    if (userData.length === 0) {
        return false;
    }
    else {
        for (var i = 0; i < userData.length; i++) {
            if (userData[i].UName === user.UName) {
                return true;
            }
            else if (userData[i].UName !== user.UName && i === userData.length - 1) {
                return false;
            }
        }
    }
}

const validateUser = (userData, user) => {
    if (userData.length === 0) {
        return [false, 0];
    }

    for (var i = 0; i < userData.length; i++) {

        if (userData[i].UName === user.UName && userData[i].Password === user.Password) {
            return [true, i];
         
        }
        else if (i === userData.length - 1) {
            return [false, 0];

        }
    }
}
module.exports = route;