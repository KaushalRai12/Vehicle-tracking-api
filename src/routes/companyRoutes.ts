import { Router } from "express";
import { getAllCompanies, createCompany } from "../controllers/companyController";

const router = Router();

router.get("/", getAllCompanies);
router.post("/", createCompany);

export default router;
