const express = require('express');
const routes = require("./routes");
const bodyParser = require("./bodyParces");
const app = express();
const PORT = process.env.PORT || 3000;


routes(app);
bodyParser(app);

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})
