import { IBackground, ISkill } from '../../app/backgrounds/background/background';
import { bookBackgrounds } from '../official-backgrounds';

export function parseBackgrounds() {
  const replaceLineBreaks = (str: string) =>
    str
      ?.replace(/(?=[^\s])-\n/gm, '')
      ?.replace(/\n/gm, ' ')
      ?.trim();

  return bookBackgrounds.map(bookText => {
    const infoParsed = /(\d{2})(\(а\)|\(б\))?\s(.+(?=\n))\n([\W\w]+(?=\nИмущество))/gm.exec(bookText) || [];
    const [, roll, option, name, text] = infoParsed;

    const possessionsParsed = /(?<=Имущество)\n([\W\w]+(?=\nНавыки))/gm.exec(bookText) || [];
    const possessions = possessionsParsed[1]
      .split('• ')
      .slice(1)
      .map(p => {
        console.log(p);
        return replaceLineBreaks(p);
      });

    const skillsParsed = /(?<=Навыки)\n([\W\w]+(?=\nОсобенность))|(?<=Навыки)\n([\W\w]+)/gm.exec(bookText) || [];
    const skills = (skillsParsed[1] || skillsParsed[2])
      .split(/(\n(?=\d))/gm)
      .filter(s => !!s.trim())
      .map((s: string): ISkill => {
        const skillParsed = /(\d{1})\W([\W\w\s\S]+)/gm.exec(s) || [];

        const [, value, name] = skillParsed;
        return { name: replaceLineBreaks(name), value };
      });

    const specialParsed = /(?<=Особенность)\n([\W\w]+)/gm.exec(bookText) || [];
    const special = specialParsed?.[1];

    const background: IBackground = {
      name,
      text: replaceLineBreaks(text),
      possessions,
      skills,
      special: replaceLineBreaks(special) || null,
      roll: { value: Number(roll), option: option || null },
      source: 'Troika! Numinous Edition',
    } as IBackground;
    return background;
  });
}
