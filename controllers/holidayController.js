const express = require("express");
const Holiday = require("../models/holidays");
const router = express.Router();

router.post("/seed", async (req, res) => {
  try {
    res
      .status(200)
      .json({ status: "ok", message: "create holidays route is working" });
  } catch (error) {}
});

router.get("/", async (req, res) => {
  try {
    res
      .status(200)
      .json({ status: "ok", message: "get holidays route is working" });
  } catch (error) {}
});

router.post("/", async (req, res) => {
  try {
    res
      .status(200)
      .json({ status: "ok", message: "create holidays route is working" });
  } catch (error) {}
});

router.get("/:id", async (req, res) => {
  try {
    res.status(200).json({
      status: "ok",
      message: "get individual holiday route is working",
    });
  } catch (error) {}
});

router.put("/:id", async (req, res) => {
  try {
    res.status(200).json({
      status: "ok",
      message: "edit individual holiday route is working",
    });
  } catch (error) {}
});

router.delete("/:id", async (req, res) => {
  try {
    res.status(200).json({
      status: "ok",
      message: "delete individual holiday route is working",
    });
  } catch (error) {}
});

module.exports = router;
