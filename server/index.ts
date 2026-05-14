import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { router } from "./routes";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const isProd = process.env.NODE_ENV === "production";
const PORT = isProd ? 5000 : 3001;

app.use(cors());
app.use(express.json());

app.use("/api/uploads", express.static(path.join(__dirname, "..", "uploads")));
app.use("/pdfs", express.static(path.join(__dirname, "..", "public", "pdfs")));
app.use("/images", express.static(path.join(__dirname, "..", "public", "images")));

app.use(router);

if (isProd) {
  const distPath = path.join(__dirname, "..", "dist");
  app.use(express.static(distPath));
  app.use((_req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
  });
}

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
