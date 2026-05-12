const express = require('express');
const router = express.Router();
const db = require('../database');

router.post('/add', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const sql = "INSERT INTO contact (name, email,message) VALUES (?, ?, ?)";
        const [result] = await db.query(sql, [name, email,  message ]);
        res.status(201).json({ message: "Üzenet elküldve!" });
    } catch (error) {
        res.status(500).json({ error: "Szerver hiba a mentéskor" });
    }
});



module.exports = router;