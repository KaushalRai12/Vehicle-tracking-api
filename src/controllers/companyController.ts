import { getRepository } from "typeorm";
import { Company } from "../entity/Company";
import { Request, Response } from "express";

export const getAllCompanies = async (req: Request, res: Response) => {
    const companyRepository = getRepository(Company);
    const companies = await companyRepository.find();
    res.json(companies);
};

export const createCompany = async (req: Request, res: Response) => {
    const companyRepository = getRepository(Company);
    const company = companyRepository.create(req.body);
    const results = await companyRepository.save(company);
    res.json(results);
};
