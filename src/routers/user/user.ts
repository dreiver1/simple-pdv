/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management and login
 */

/**
 * @swagger
 * /user:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cpf:
 *                 type: string
 *                 description: User's CPF
 *                 example: "12345678901"
 *               data:
 *                 type: string
 *                 format: date
 *                 description: User's birth date
 *                 example: "1990-01-01"
 *               email:
 *                 type: string
 *                 description: User's email
 *                 example: "user@example.com"
 *               name:
 *                 type: string
 *                 description: User's full name
 *                 example: "John Doe"
 *               password:
 *                 type: string
 *                 description: User's password
 *                 example: "password123"
 *               userName:
 *                 type: string
 *                 description: User's username
 *                 example: "johndoe"
 *               roleId:
 *                 type: integer
 *                 description: Role ID assigned to the user
 *                 example: 1
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /user:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: List of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   userId:
 *                     type: string
 *                     description: User ID
 *                   name:
 *                     type: string
 *                     description: User's full name
 *                   email:
 *                     type: string
 *                     description: User's email
 *                   userName:
 *                     type: string
 *                     description: User's username
 */

/**
 * @swagger
 * /{userId}:
 *   get:
 *     summary: Get user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: string
 *         required: true
 *         description: The user ID
 *     responses:
 *       200:
 *         description: User data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 userId:
 *                   type: string
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *                 userName:
 *                   type: string
 *       404:
 *         description: User not found
 */

/**
 * @swagger
 * /name/{name}:
 *   get:
 *     summary: Get user by name
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: name
 *         schema:
 *           type: string
 *         required: true
 *         description: The user name
 *     responses:
 *       200:
 *         description: User data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 userId:
 *                   type: string
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *                 userName:
 *                   type: string
 *       404:
 *         description: User not found
 */

/**
 * @swagger
 * /username/{userName}:
 *   get:
 *     summary: Get user by username
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: userName
 *         schema:
 *           type: string
 *         required: true
 *         description: The username
 *     responses:
 *       200:
 *         description: User data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 userId:
 *                   type: string
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *                 userName:
 *                   type: string
 *       404:
 *         description: User not found
 */

/**
 * @swagger
 * /{userId}:
 *   delete:
 *     summary: Delete user by ID
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: string
 *         required: true
 *         description: The user ID
 *     responses:
 *       200:
 *         description: User deleted successfully
 *       404:
 *         description: User not found
 */

/**
 * @swagger
 * /{userId}:
 *   put:
 *     summary: Update user by ID
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: string
 *         required: true
 *         description: The user ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: User's full name
 *                 example: "John Doe"
 *               email:
 *                 type: string
 *                 description: User's email
 *                 example: "user@example.com"
 *               roleId:
 *                 type: integer
 *                 description: Role ID assigned to the user
 *                 example: 1
 *     responses:
 *       200:
 *         description: User updated successfully
 *       404:
 *         description: User not found
 */


import { Router } from "express";
import userController from "../../controlers/User/User";
const app = Router()
const user = new userController()

import { authorize } from "../../midleware/authorizate";

app.post('/user/', authorize('CREATE_USER'), user.post)
app.get('/user/', user.get)
app.get('/:userId', user.getById)
app.get('/name/:name', user.getByName)
app.get('/username/:userName', user.getByUserName)
app.delete('/:userId', authorize('DELETE_USER'), user.delete)
app.put('/:userId', authorize('UPDATE_USER'), user.put)



export default app