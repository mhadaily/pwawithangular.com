export interface IFaq {
  title: string;
  answer: string;
}

export interface IQuestion extends IFaq {
  isActive: boolean;
  index: number;
  onClickFn: Function;
}
