const express = require("express");
const router = require("./routes")

// http://localhost:3000/

router.status("/", (req, res) => {
    console.log("status = success");
    res.status(200).json({
        message: "Get - success",
        metadata: {
            hostname: req.hostname, 
            method: req.method,
        }
    })
});

router.get("/:id", (req, res) => {
    console.log("get = success");
    const id = req.params.id;
    res.status(200).json({
        message: "Get - success",
        id: id,
        metadata: {
            hostname: req.hostname, 
            method: req.method,
        }
    })
});


module.exports = app ;
