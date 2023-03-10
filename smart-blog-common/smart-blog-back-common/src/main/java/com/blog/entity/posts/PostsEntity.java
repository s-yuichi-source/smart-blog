package com.blog.entity.posts;

import java.sql.Date;
import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Data
@Table(name = "posts")
public class PostsEntity {
    
  @Id
  @Column(name = "post_id")
  private int postId;

  @Column(name = "author")
  private String author;

  @Column(name = "title")
  private String title;

  @Column(name = "content")
  private String content;

  @Column(name = "contents_date")
  private Date contentsDate;

  @Column(name = "post_status")
  private String postStatus;

  @Column(name = "created_date")
  private Timestamp createdDate;

  @Column(name = "created_by")
  private String createdBy;

  @Column(name = "updated_date")
  private Timestamp updatedDate;

  @Column(name = "updated_by")
  private String updateBy;

  @Column(name = "version")
  private int version;
}
