import { Request, Response } from 'express';
import User from '../models/UserModel';

export const createUser = async (req: Request, res: Response) => {
  try {
    const { full_name, email, password } = req.body;
    console.log(req.body)
    const newUser = await User.create({ full_name, email, password });
    res.status(201).send(newUser);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      res.status(404).send('User not found');
      return;
    }
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.findAll();
    if (!users) {
      res.status(404).send('User not found');
      return;
    }
    res.status(200).send({
      status: "successfully",
      users: users
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const user = await User.update(req.body, {
      where: { id: req.params.id }
    });
    if (user[0] === 0) {
      res.status(404).send('User not found');
      return;
    }
    res.send('User updated successfully.');
  } catch (error) {
    res.status(400).send(error);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const count = await User.destroy({
      where: { id: req.params.id }
    });
    if (count === 0) {
      res.status(404).send('User not found');
      return;
    }
    res.send('User deleted successfully.');
  } catch (error) {
    res.status(500).send(error);
  }
};
