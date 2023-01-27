package com.blog.guest.domain.posts.dto;

import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PostsDto {

  private int postId;
  private String author;
  private String title;
  private String content;
  private Date contentsDate;
  private String postStatus;
}
