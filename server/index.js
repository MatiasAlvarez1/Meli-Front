const express = require("express");
const path = require("path");
const cors = require('cors');

const itemsRoutes = require("./routes/items");
const errorHandler = require("./middlewares/errorHandler");
const authorHandler = require("./middlewares/authorHandler");
const app = express();

if(process.env.NODE_ENV === "production"){
    app.set("port", 3001);
}else{
    app.set("port", 3200);
}


// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(authorHandler);


app.use("/api", itemsRoutes);
app.use(errorHandler);

// static files
app.use(express.static(path.join(__dirname, '../client/build')));

if (process.env.NODE_ENV === 'production') {
    app.get('/ *', function (req, res) {
        res.sendFile(path.join (__dirname, '../client/build/index.html'));
    });
}

// start the server
app.listen(app.get("port"), () => {
    console.log(`app is runing on port ${app.get('port')} for ${process.env.NODE_ENV} environment`);
}); 