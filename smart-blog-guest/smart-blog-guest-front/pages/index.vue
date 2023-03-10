<template>
  <v-card
    class="mx-left my-12"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>
    <template>
      <v-card 
        v-for="article in articles"
        :key="article.postId"
        class="mx-left my-12" max-width="374"
      >
        <article-sheet
          :article="article"
        />
      </v-card>
    </template>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { ConfigLoader, Config } from '@/domains/Config';
import ArticleService from '@/domains/article/ArticleService';
import Article from '@/domains/article/Article';

@Component
export default class IndexPage extends Vue {
  config!: Config;
  articleService!: ArticleService;
  articles: Article[] = [];

  async fetch() {
    this.config = await ConfigLoader.getConfig();
    const articleList = await this.articleService.getArticleList();
    console.log(articleList);
  }


}
</script>
