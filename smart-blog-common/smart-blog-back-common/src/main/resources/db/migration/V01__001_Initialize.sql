-- V0x__0x_xxx.sql
-- install uuid extension
CREATE EXTENSION IF NOT EXISTS "pgcrypto" WITH SCHEMA public;

-- create table
CREATE TABLE posts (
  post_id SERIAL NOT NULL,
  author varchar(20) NOT NULL,
  title varchar,
  content text NOT NULL,
  contents_date date,
  post_status varchar(16) NOT NULL default 'draft',
  ${commonColumns}
);

CREATE TABLE users (
  user_id varchar(20) NOT NULL,
  user_name varchar(20) NOT NULL,
  email text NOT NULL,
  password varchar(128) NOT NULL,
  user_status boolean NOT NULL default false,
  ${commonColumns}
);

INSERT INTO public.posts
(post_id, author, title, "content", contents_date, post_status, created_date, created_by, updated_date, updated_by, "version")
VALUES(1, 'test', 'タイトル', 'コンテンツ', NULL, 'draft', '2023-01-06 19:37:46.588', 'system', '2023-01-06 19:37:46.588', 'system', 0);

INSERT INTO public.posts
(post_id, author, title, "content", contents_date, post_status, created_date, created_by, updated_date, updated_by, "version")
VALUES(2, 'test2', 'タイトル2', 'コンテンツ2', NULL, 'draft', '2023-01-06 19:37:46.588', 'system', '2023-01-06 19:37:46.588', 'system', 0);

-- alter table add constraint pk
ALTER TABLE ONLY posts
  ADD CONSTRAINT posts_pkey PRIMARY KEY (post_id);

ALTER TABLE ONLY users
  ADD CONSTRAINT user_pkey PRIMARY KEY (user_id);
