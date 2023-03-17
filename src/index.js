const express = require('express')


const app = express();

app.use(express.json());

const users = [
    {
        id: 1,
      name: "Jose Manuel",
      surname: "Cano",
      email: "jcano@bloobirds.com"  
    },
    {
        id: 2,
      name: "Oriol",
      surname: "Requena",
      email: "orequena@gmail.com"  

    }
];

app.get("/users", (req, res) => {
    console.log("ruta users");

    res.status(200).json(users);
})

app.get("/users/:id", (req, res) => {
   
    const id = req.params.id;

    const foundUser = users.find(u => u.id === Number(id));

    if(!foundUser){
        res.status(404).send();
    }else{
        res.status(200).json(foundUser);
    }


})

app.post("/users", (req, res) => {
    
    const newUser = req.body;

    newUser.id = users.length + 1;

    users.push(newUser);
    res.status(200).json(newUser);

})

app.patch("/users/:id", (req, res) => {

})

app.delete("/users/:id", (req, res) => {

})


app.listen(3000, () => {
    console.log("Server started!");
})


