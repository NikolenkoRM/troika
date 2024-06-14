export interface IRuleArticle {
  paragraph: string;
  heading: string;
  text: string[];
  subarticles: IRuleArticle[];
}
