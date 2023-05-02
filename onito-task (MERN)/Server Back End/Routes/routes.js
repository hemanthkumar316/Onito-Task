const express = require("express");
const router = express.Router();
const User = require("../Models/modelSchema");

/*POST API*/

router.post("/user", async (req, res) => {
  try {
    const {
      name,
      mobile,
      guardian_label,
      guardian_name,
      address,
      Country,
      dob,
      sex,
      id_type,
      govt_id,
      email,
      contact_number,
      state,
      city,
      pincode,
      occupation,
      religion,
      martial_status,
      blood_group,
      nationality,
    } = req.body;
    const newuser = new User({
      name: name,
      mobile: mobile,
      guardian_label: guardian_label,
      guardian_name: guardian_name,
      address: address,
      Country: Country,
      dob: dob,
      sex: sex,
      id_type: id_type,
      govt_id: govt_id,
      email: email,
      contact_number: contact_number,
      state: state,
      city: city,
      pincode: pincode,
      occupation: occupation,
      religion: religion,
      martial_status: martial_status,
      blood_group: blood_group,
      nationality: nationality,
    });
    console.log(newuser);
    const saveuser = await newuser.save();
    res.status(200).json({ result: "User is added", saveuser });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

/* GET API */

router.get("/users", async (req, res) => {
  try {
    const alldata = User.find();
    return res.json(await alldata);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

/* GET SINGLE API */

router.get("/user/:id", async (req, res) => {
  try {
    let userId = req.params.id;
    let user = await User.findById(userId);
    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    response.status(500).json({
      msg: err.message,
    });
  }
});

/* DELETE API */

router.delete("/user/:id", async (req, res) => {
  try {
    let userId = req.params.id;
    user = await User.findByIdAndDelete(userId);
    res.status(200).json({ result: "User is  deleted " });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
/* EDIT API */

router.put("/user/:id", async (req, res) => {
  let userId = req.params.id;
  const {
    name,
    mobile,
    guardian_label,
    guardian_name,
    address,
    Country,
    dob,
    sex,
    id_type,
    govt_id,
    email,
    contact_number,
    state,
    city,
    pincode,
    occupation,
    religion,
    martial_status,
    blood_group,
    nationality,
  } = req.body;
  try {
    let updatedUser = {
      name: name,
      mobile: mobile,
      guardian_label: guardian_label,
      guardian_name: guardian_name,
      address: address,
      Country: Country,
      dob: dob,
      sex: sex,
      id_type: id_type,
      govt_id: govt_id,
      email: email,
      contact_number: contact_number,
      state: state,
      city: city,
      pincode: pincode,
      occupation: occupation,
      religion: religion,
      martial_status: martial_status,
      blood_group: blood_group,
      nationality: nationality,
    };
    //  check employee is exists or not
    let user = await User.findById(userId);
    if (!user) {
      return res.status(401).json({
        msg: "user not Found",
      });
    }
    // update
    employee = await User.findByIdAndUpdate(
      userId,
      {
        $set: updatedUser,
      },
      { new: true }
    );
    res.status(200).json({
      result: "user is Updated",
      user: user,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      msg: err.message,
    });
  }
});
module.exports = router;
