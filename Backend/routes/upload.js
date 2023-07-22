const router = require("express").Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cd) => {
    cd(null, "public/images");
  },
  filename: (req, file, cd) => {
    cd(null, req.body.name);
  },
});
const upload = multer({ storage });

//画像アップロード用のAPI
router.post("/", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("画像アップロードに成功しました。");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
