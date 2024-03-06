package com.seif.jwt.backend.services;

import com.seif.jwt.backend.entities.Comment;
import com.seif.jwt.backend.entities.User;
import com.seif.jwt.backend.repositories.CommentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
@RequiredArgsConstructor
public class CommentService {
    private final CommentRepository commentRepository;
    public List<Comment> getAll() {
        return commentRepository.findAll();
    }
    public void delete(long commentId) throws Exception {
        commentRepository.findById(commentId).orElseThrow(() -> new Exception("comment not found"));
        commentRepository.deleteById(commentId);
    }
    public void update(long idComment, Comment c) {
        Comment c1 = commentRepository.getById(idComment);
        System.out.println(c1);

        commentRepository.save(c);
    }

    public Comment addComment(Comment comment) {

        return commentRepository.save(comment);
    }

}
