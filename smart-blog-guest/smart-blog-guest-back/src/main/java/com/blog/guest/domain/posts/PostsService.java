package com.blog.guest.domain.posts;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.blog.entity.posts.PostsEntity;

@Service
public class PostsService {

  @Autowired PostsRepository postsRepository;

  public List<PostsEntity> getAll() {
    return postsRepository.findAllOrderByAsc();
  }
  
  public Optional<PostsEntity> getPost(int postId) {
    return postsRepository.findById(postId);
  }
}
