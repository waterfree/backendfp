import { Router } from "express";
import { bienvenida, getOwners, findoneOwner, postOwners, destroyOwners, getAttends, postAttends } from "../controllers/controller.js";

let router = new Router();

router.get("/",bienvenida)
router.get("/getOwner", getOwners)
router.get("/findOwner/:id", findoneOwner)
router.post("/createOwner", postOwners)
router.delete("/deleteOwner/:id", destroyOwners)

export default router