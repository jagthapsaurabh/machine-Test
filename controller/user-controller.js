const express = require("express");
const HttpError = require("../model/erro-model");
const User = require("../model/user-model");

const create = async (req, res, next) => {
  const { name, mobile } = req.body;
  let newdata;
  try {
    newdata = await User({
      name,
      mobile,
      //   image: req.file.path,
    });
  } catch (err) {
    return next(new HttpError("something wrong", 500));
  }

  try {
    newdata.save();
  } catch (err) {
    return next(new HttpError("something wrong", 500));
  }

  res.status(201).json({ message: "record save" });
};

const getdata = async (req, res, next) => {
  let user;
  try {
    user = await User.find({});
  } catch (err) {
    return next(new HttpError("someting is wrong", 500));
  }
  console.log(user);
  res.status(201).json(user);
};

exports.create = create;
exports.getdata = getdata;
