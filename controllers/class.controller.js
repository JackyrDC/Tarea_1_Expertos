import Classes from '../models/class.model.js';
import { validationResult } from 'express-validator';

export const getAllClasses = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const classes = await Classes.find();
    res.status(200).json(classes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const getClassById = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const classData = await Classes.findById(req.params.id);
    if (!classData) {
      return res.status(404).json({ message: 'Class not found' });
    }
    res.status(200).json(classData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const createClass = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const newClass = new Classes(req.body);
    await newClass.save();
    res.status(201).json(newClass);
    } catch (error) {
    res.status(500).json({ message: error.message });   
    }
}

export const updateClass = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const classData = await Classes.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!classData) {
      return res.status(404).json({ message: 'Class not found' });
    }
    res.status(200).json(classData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
export const deleteClass = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const classData = await Classes.findByIdAndDelete(req.params.id);
    if (!classData) {
      return res.status(404).json({ message: 'Class not found' });
    }
    res.status(200).json({ message: 'Class deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}


