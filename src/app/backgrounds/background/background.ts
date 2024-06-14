export interface IBackground {
  name: string;
  text: string;
  possessions: string[];
  skills: ISkill[];
  special: string | null;
  roll: IBackgroundRoll | null;
  source: string;
}

export interface ISkill {
  name: string;
  value: string;
}

export interface IBackgroundRoll {
  value: number;
  option?: 'a' | 'b' | null;
}
