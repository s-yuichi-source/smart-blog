package com.blog.guest.domain.posts;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.blog.entity.posts.PostsEntity;
import com.blog.guest.domain.posts.dto.PostsDto;

@Component
public class PostsFactory {

  @Autowired private ModelMapper mapper;

  public List<PostsDto> createArticleListResponse(List<PostsEntity> list) {
    List<PostsDto> resList = list.stream().map(postEntity -> mapper.map(postEntity, PostsDto.class))
            .collect(Collectors.toList());
    
    return resList;
  }

  public PostsDto createArctileResponse(Optional<PostsEntity> optional) {
    return mapper.map(optional, PostsDto.class);
  }
    
}
