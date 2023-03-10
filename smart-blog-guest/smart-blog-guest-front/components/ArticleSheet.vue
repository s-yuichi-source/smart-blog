<template>
  <v-card>
    <v-card-title>{{ article.title }}</v-card-title>
    <v-card-text>{{ article.content }}</v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';
import Article from '~/domains/article/Article';

@Component
export default class ArticleSheet extends Vue {

  @Prop()
  article!: Article;

}
</script>