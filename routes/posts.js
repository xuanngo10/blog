const express = require("express");
const router = express.Router();
const passport = require("passport");

// Require controller modules
const post_controller = require("../controllers/post_controller");

router.get("/test", (req, res) => {
  res.json({ msg: "This is the post route" });
});

// GET request for all posts
router.get("/", post_controller.post_get);

// GET request for all posts from a user
router.get("/user/:id", post_controller.post_user_get);

// GET request for a post from an id
router.get("/:id", post_controller.post_id_get);

// POST request for creating a post
router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  post_controller.post_create_post
);

// PATCH request for editing post
router.patch(
  "/:id/edit",
  passport.authenticate("jwt", { session: false }),
  post_controller.post_edit_patch
);

// DELETE request for deleting a post
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  post_controller.post_delete
);

// POST request for creating a comment
router.post(
  "/:id/comment/create",
  passport.authenticate("jwt", { session: false }),
  post_controller.comment_create_post
);

// DELETE request for deleting a comment
router.delete(
  "/:id/comment/:commentId",
  passport.authenticate("jwt", { session: false }),
  post_controller.comment_delete
);

module.exports = router;
