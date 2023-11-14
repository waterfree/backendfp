import { Router } from "express";
import { bienvenida, getOwners, findoneOwner, postOwners, destroyOwners } from "../controllers/controller_Owners.js";

import { getAttends, findoneAttend, postAttends, destroyAttends } from "../controllers/controller_Attends.js";

import { getPets, findonePet, postPets, destroyPets } from "../controllers/controller_Pets.js";

import { getUsers, findoneUser, postUsers, destroyUsers } from "../controllers/controller_users.js";

import { getVeterinarians, findoneVeterinarians, postVeterinarians, destroyVeterinarians } from "../controllers/controller_Veterinarians.js";

let router = new Router();
//prueba

router.get("/",bienvenida)

//Owners

router.get("/getOwner", getOwners)
router.get("/findOwner/:id", findoneOwner)
router.post("/createOwner", postOwners)
router.delete("/deleteOwner/:id", destroyOwners)

//Attends

router.get("/getAttends", getAttends)
router.get("/findAttend/:id", findoneAttend)
router.post("/createAttend", postAttends)
router.delete("/deleteAttend/:id", destroyAttends)

//Pets

router.get("/getPets", getPets)
router.get("/findPet/:id", findonePet)
router.post("/createPet", postPets)
router.delete("/deletePet/:id", destroyPets)

//Users

router.get("/getUsers", getUsers)
router.get("/findUser/:id", findoneUser)
router.post("/createUser", postUsers)
router.delete("/deleteUser/:id", destroyUsers)

//Veterinarians

router.get("/getVeterinarians", getVeterinarians)
router.get("/findVeterinarian/:id", findoneVeterinarians)
router.post("/createVeterinarian", postVeterinarians)
router.delete("/deleteVeterinarian/:id", destroyVeterinarians)

export default router