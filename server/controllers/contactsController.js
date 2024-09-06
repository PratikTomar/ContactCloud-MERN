const contacts = require("../models/contactsModel");

const getAllContacts = async (req, res) => {
  try {
    const userId = req.user.userid;
    const allContacts = await contacts.find({ user: userId });
    return res.status(200).json(allContacts);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

const createContacts = async (req, res) => {
  try {
    const userId = req.user.userid;
    const contact = await contacts.create({ ...req.body, user: userId });
    console.log(contact);
    return res.status(201).json({ contact, status: "success" });
  } catch (error) {
    return res.status(500).json({ message: error, status: "fail" });
  }
};

const getContact = async (req, res) => {
  try {
    const { id: contactID } = req.params;
    const userId = req.user.userid;
    const getOneContact = await contacts.findOne({
      _id: contactID,
      user: userId,
    });
    if (!getOneContact)
      return res
        .status(404)
        .json({ msg: `No contact with this id_: ${contactID}` });
    return res.status(200).json(getOneContact);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

const updateContact = async (req, res) => {
  try {
    const { id: contactID } = req.params;
    const userId = req.user.userid;
    const updateOneContact = await contacts.findOneAndUpdate(
      { _id: contactID, user: userId },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updateOneContact)
      return res
        .status(404)
        .json({ msg: `No contact with this id_: ${contactID}` });
    return res.status(200).json({ updateOneContact, status: "success" });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

const deleteContact = async (req, res) => {
  try {
    const { id: contactID } = req.params;
    const userId = req.user.userid;
    const deleteOneContact = await contacts.findOneAndDelete({
      _id: contactID,
      user: userId,
    });
    if (!deleteOneContact)
      return res
        .status(404)
        .json({ msg: `No contact with this id_: ${contactID}` });
    return res.status(200).json({ deleteOneContact, status: "success" });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

module.exports = {
  getAllContacts,
  createContacts,
  getContact,
  updateContact,
  deleteContact,
};
