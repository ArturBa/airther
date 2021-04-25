/**
 * Helper for checking a page width
 */
export class WidthHelper {
  /**
   * max width of md (where the page change behavior)
   */
  static readonly mdMaxWidth = 768; // px

  /**
   * shared carrousel settings
   */
  static readonly responsiveOptions = [
    {
      breakpoint: WidthHelper.mdMaxWidth + 'px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  /**
   * Check if screen is small
   * @param width current width
   * @returns true if screen is small
   */
  static isSmallScreen(width: number): boolean {
    return width < this.mdMaxWidth;
  }
}
