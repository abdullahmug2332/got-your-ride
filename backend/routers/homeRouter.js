const express= require("express");
const router=express.Router();
const {getHomeInfo,getHomeHeroData,updateHomeHero,updateHomeData}=require("../controllers/homeController");

router.get("/",getHomeInfo);
router.get("/gethomeherodata",getHomeHeroData);
router.put("/updatehomeherodata",updateHomeHero);
router.put("/updatehomedata",updateHomeData);

module.exports = router; 