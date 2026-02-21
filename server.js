const express = require("express");
const cors = require("cors");
const { Sequelize, DataTypes } = require("sequelize");

const app = express();

app.use(cors());
app.use(express.json());

// Database
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "fleetflow.db",
});

// Model
const Vehicle = sequelize.define("Vehicle", {
  model: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  plate: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  capacity: {
    type: DataTypes.INTEGER,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: "Available",
  },
});

// Test
app.get("/", (req, res) => {
  res.send("FleetFlow API Running");
});

// GET
app.get("/vehicles", async (req, res) => {
  const data = await Vehicle.findAll();
  res.json(data);
});

// POST
app.post("/vehicles", async (req, res) => {
  try {
    const v = await Vehicle.create(req.body);
    res.json(v);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

// PUT
app.put("/vehicles/:id", async (req, res) => {
  try {
    await Vehicle.update(req.body, {
      where: { id: req.params.id },
    });

    res.json({ success: true });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

// DELETE  ✅ GUARANTEED
app.delete("/vehicles/:id", async (req, res) => {
  try {
    await Vehicle.destroy({
      where: { id: req.params.id },
    });

    res.json({ success: true });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

// Start
sequelize.sync().then(() => {
  app.listen(5000, () => {
    console.log("Backend running on http://localhost:5000");
  });
});