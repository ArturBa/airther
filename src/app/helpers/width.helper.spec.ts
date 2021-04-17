/// <reference types="jasmine" />

import { WidthHelper } from './width.helper';

describe('WidhtHelper', () => {
  describe('is screen small', () => {
    it('300px', () => {
      expect(WidthHelper.isSmallScreen(300)).toBeTruthy();
    });
    it('1000', () => {
      expect(WidthHelper.isSmallScreen(1000)).toBeFalsy();
    });
  });
});
