import express from 'express';
import { getContacts, saveContact } from '../controllers/contacts.controllers.js';

export const contactsRouter = express.Router();

contactsRouter.get('/', getContacts);
contactsRouter.post('/', saveContact);