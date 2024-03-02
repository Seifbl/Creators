package com.seif.jwt.backend.repositories;

import com.seif.jwt.backend.entities.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment,Long> {
}
