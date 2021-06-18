import express from "express"

const PORT = 8000

const app = express()

app.get("/", (_, res) => res.send("Yay, Developer Experience! Very Cool!"))

app.listen(PORT, () => {
    console.log(`[server]: Server is running at https://localhost:${PORT}`)
})
