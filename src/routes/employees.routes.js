import { Router } from "express"
import { getEmployees, getEmployee, createEmployee, editEmployee, deleteEmployee } from "../controllers/employees.controller.js"

const router = Router()

router.get("/employees", getEmployees)
router.get("/employees/:id", getEmployee)
router.post("/employees", createEmployee)
router.patch("/employees/:id", editEmployee)
router.delete("/employees/:id", deleteEmployee)

export default router