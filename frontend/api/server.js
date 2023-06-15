const express = require('express');
const app = express();


app.use("/api", (req, res, next) => {
    res.send("Hello from API");
});

app.listen(3000, () => 
    console.log('App is running on port 3000')
);
