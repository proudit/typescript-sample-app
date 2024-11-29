import express, { Request, Response } from "express"; // Request, Response をインポート
import itemsRouter from "./routes/items";
import path from "path";

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/api/items", itemsRouter);

// Root route
app.get("/", (req: Request, res: Response) => { // req, res の型を明示
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

