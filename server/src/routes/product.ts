import { Router } from "express";
import { getProducts } from "../controllers/cursos";

const router = Router();

router.get('/', getProducts)

export default router;