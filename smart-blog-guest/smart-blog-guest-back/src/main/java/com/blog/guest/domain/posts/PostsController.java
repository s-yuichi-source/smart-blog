package com.blog.guest.domain.posts;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.blog.guest.domain.posts.dto.PostsDto;

@RestController
@RequestMapping("/article")
@CrossOrigin
public class PostsController {
  
  @Autowired PostsFactory postsFactory;

  @Autowired PostsService postsService;

  // 全件取得
  @GetMapping("/list")
  public List<PostsDto> getPostList() {
    return postsFactory.createArticleListResponse(postsService.getAll());
  }

  // 1件取得
  @GetMapping("artricle/{id}")
  public PostsDto getArticle(@PathVariable int postId) {
    return postsFactory.createArctileResponse(postsService.getPost(postId));
  }

  // 登録

  // 更新
  

  // 削除

}
