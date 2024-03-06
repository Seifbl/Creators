package com.seif.jwt.backend.controllers;

import com.seif.jwt.backend.entities.Comment;
import com.seif.jwt.backend.entities.User;
import com.seif.jwt.backend.services.CommentService;
import com.seif.jwt.backend.services.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
public class CommentController {
    CommentService commentService;
    @GetMapping("/comment")
    public List<Comment> getall() {
        return commentService.getAll();
    }
    @DeleteMapping("/comment/{commentId}")
    public void delete(@PathVariable long commentId) throws Exception {
        commentService.delete(commentId);
    }
    @PostMapping("/comment/{commentId}")
    public void delete(@PathVariable long commentId, @RequestBody Comment c)   {

        c.setIdComment(commentId);
        commentService.update(commentId,c);
    }
    @PostMapping("comment/add")
    public ResponseEntity<Comment> addingComment(@RequestBody Comment comment) {
        try {
            Comment addedComment = commentService.addComment(comment);
            return new ResponseEntity<>(addedComment, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

