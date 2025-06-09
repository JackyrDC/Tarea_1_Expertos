import career from '../models/career.model.js';
import { validationResult } from 'express-validator';

export const getAllCareers = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const careers = await career.find();
    res.status(200).json(careers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
export const getCareerById = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const careerData = await career.findById(req.params.id);
    if (!careerData) {
      return res.status(404).json({ message: 'Career not found' });
    }
    res.status(200).json(careerData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}   

export const createCareer = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const newCareer = new career(req.body);
    await newCareer.save();
    res.status(201).json(newCareer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const updateCareer = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const careerData = await career.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!careerData) {
      return res.status(404).json({ message: 'Career not found' });
    }
    res.status(200).json(careerData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const deleteCareer = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const careerData = await career.findByIdAndDelete(req.params.id);
    if (!careerData) {
      return res.status(404).json({ message: 'Career not found' });
    }
    res.status(200).json({ message: 'Career deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}