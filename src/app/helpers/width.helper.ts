export class WidthHelper {
  static readonly mdMaxWidth = 768; // px

  static readonly responsiveOptions = [
    {
      breakpoint: WidthHelper.mdMaxWidth,
      numVisible: 1,
      numScroll: 1,
    },
  ];

  static isSmallScreen(width: number): boolean {
    return width < this.mdMaxWidth;
  }
}
