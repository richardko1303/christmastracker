const express = require("express");
const app = express();
const ejs = require("ejs");

app.listen(process.env.PORT || 8080, () => {
    console.log("Server is running...");
});

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get("/", (req, res) => {

    //declaration of variables
    let date= new Date();
    let days;

    //date
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0');
    var yyyy = date.getFullYear();
    date = dd + '/' + mm + '/' + yyyy;

    //days
    let Adate = new Date(mm + '/' + dd + '/' + yyyy)
    let Bdate = new Date("12/24/" + yyyy)

    let difference = Bdate.getTime() - Adate.getTime();
    
    //change to days
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));

    //render ejs file
    res.render("index.ejs", {
        cdDate: date,
        cdDays: TotalDays,
    })
});