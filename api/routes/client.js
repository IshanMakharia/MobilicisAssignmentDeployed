const router = require("express").Router();
const {dirname} = require("path");
const {fileURLToPath} = require("url");
const path = require("path");


// import { dirname } from "path";
// import * as path from 'path';
// import { fileURLToPath } from 'url';

//var router = Router();

const _filename = fileURLToPath(import.meta.url);

const _dirname = dirname(_filename);

router.get('/*', (req, res) => {
	res.sendFile(path.resolve(__dirname,'../../frontend/build','index.html'));
});

export default router;
