import { pool } from "../db.js"

export const getEmployees = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM employee")
        res.send(rows)
    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" })
    }
}

export const getEmployee = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?", [req.params.id])

        if (rows.length <= 0) return res.status(404).json({
            message: "Employee not found"
        })

        res.send(rows[0])
    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" })
    }
}

export const createEmployee = async (req, res) => {
    const { name, salary, email } = req.body
    try {
        const [rows] = await pool.query("INSERT INTO employee (name, salary, email) VALUES (?, ?, ?)", [name, salary, email])
        res.send({
            id: rows.insertId,
            name,
            salary,
            email
        })
    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" })
    }
}

export const deleteEmployee = async (req, res) => {
    try {
        const [result] = await pool.query("DELETE FROM employee WHERE id = ?", [req.params.id])

        if (result.affectedRows <= 0) return res.status(404).json({
            message: "Employee not found"
        })

        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" })
    }
}

export const editEmployee = async (req, res) => {
    const { id } = req.params
    const { name, salary, email } = req.body

    try {
        const [result] = await pool.query("UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary), email = IFNULL(?, email) WHERE id = ?", [name, salary, email, id])

        if (result.affectedRows === 0) return res.status(404).json({
            message: "Employee not found"
        })

        const [rows] = await pool.query("SELECT * FROM  employee WHERE id = ?", [id])

        res.json(rows)
    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" })
    }
}

