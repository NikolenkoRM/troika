/* eslint-disable @typescript-eslint/no-explicit-any */

import { IRuleArticle } from '../../app/rules/rules';

export const save = (el: any) => {
  let article: IRuleArticle = {} as IRuleArticle;
  const children: HTMLCollection = el.children;

  for (let i = 0; i < children.length; i++) {
    const section = children.item(i);
    if (!section) continue;

    const parsedChildren = parseChildren(section.children);

    if (i === 0) {
      article = { ...parsedChildren, subarticles: [] };
    } else {
      article.subarticles = [...article.subarticles, parsedChildren];
    }
  }

  return article;
};

const parseChildren = (children: HTMLCollection): IRuleArticle => {
  const replaceLineBreaks = (str: string) =>
    str
      ?.replace(/(\W)?-\n/gm, '')
      ?.replace(/\n/gm, ' ')
      ?.trim();

  const article = { text: [] as string[] } as IRuleArticle;

  for (let i = 0; i < children.length; i++) {
    const child = children.item(i);
    if (!child) continue;

    if (i === 0) {
      const [, paragraph, , , heading] = /((\d{1,2})|(\d{1,2}\.\d{1,2}))\.?\s(.+)/gm.exec(child.innerHTML) || [];

      article.paragraph = paragraph || '';
      article.heading = replaceLineBreaks(heading) || child.innerHTML;
    } else {
      const text = child.outerHTML;
      article.text.push(replaceLineBreaks(text));
    }
  }

  return article;
};
