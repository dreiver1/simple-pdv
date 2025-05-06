/**
 * User Router Module
 *
 * This module defines the routes for user-related operations in the application.
 * It uses Express Router to handle HTTP requests and delegates the logic to the
 * corresponding controller methods. Middleware is applied to enforce authorization
 * for certain routes.
 *
 * Routes:
 * - POST `/` - Creates a new user. Requires `CREATE_USER` authorization.
 * - GET `/` - Retrieves a list of all users.
 * - GET `/:userId` - Retrieves a user by their unique ID.
 * - GET `/name/:name` - Retrieves a user by their name.
 * - GET `/username/:userName` - Retrieves a user by their username.
 * - DELETE `/:userId` - Deletes a user by their unique ID. Requires `DELETE_USER` authorization.
 * - PUT `/:userId` - Updates a user by their unique ID. Requires `UPDATE_USER` authorization.
 * - POST `/login` - Authenticates a user and logs them in.
 *
 * Middleware:
 * - `authorize(permission: string)` - Ensures the user has the required permission to access the route.
 *
 * Controller:
 * - `userController` - Handles the business logic for user-related operations.
 *
 * @module UserRouter
 */
import { Router } from "express";
import userController from "../../controlers/User/User";
const app = Router()
const user = new userController()

import { authorize } from "../../midleware/authorizate";

app.post('/', authorize('CREATE_USER'), user.post)
app.get('/', user.get)
app.get('/:userId', user.getById)
app.get('/name/:name', user.getByName)
app.get('/username/:userName', user.getByUserName)
app.delete('/:userId', authorize('DELETE_USER'), user.delete)
app.put('/:userId', authorize('UPDATE_USER'), user.put)

app.post('/login', user.loginUser)


export default app