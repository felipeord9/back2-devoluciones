const express = require("express");
const multer = require("multer");
const MailController = require("../../controllers/mailController");

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/send/:id", /* upload.single("evidence"), */ MailController.sendMail);
router.post("/send/answer/authorization", MailController.sendMailAuth);
router.post("/send/answer/reject", MailController.sendMailReject);
router.post("/send/answer/collect", MailController.sendMailRecogido);
router.post("/send/answer/end", MailController.sendMailEnd);

module.exports = router;
