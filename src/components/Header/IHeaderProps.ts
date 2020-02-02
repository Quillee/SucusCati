export default interface IHeaderProps {
  brand: string;
  links: HeaderLink[];
}

export interface IHeaderLink {
  link: string;
  url: string;
}

export class HeaderLink implements IHeaderLink {
  link: string;  url: string;

  constructor(l: string, u: string) {
    this.link = l;
    this.url = u;
  }
  
}