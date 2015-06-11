System.register([], function (_export) {
  /**
   * Position helper for the popover directive.
   */
  'use strict';

  _export('PositionHelper', PositionHelper);

  function PositionHelper() {
    return {

      calculateVerticalAlignment: function calculateVerticalAlignment(elDimensions, popoverDimensions, alignment) {
        if (alignment === 'top') {
          return elDimensions.top;
        }
        if (alignment === 'bottom') {
          return elDimensions.top + elDimensions.height - popoverDimensions.height;
        }
        if (alignment === 'center') {
          return elDimensions.top + elDimensions.height / 2 - popoverDimensions.height / 2;
        }
      },

      calculateVerticalCaret: function calculateVerticalCaret(elDimensions, popoverDimensions, caretDimensions, alignment) {
        if (alignment === 'top') {
          return elDimensions.height / 2 - caretDimensions.height / 2 - 1;
        }
        if (alignment === 'bottom') {
          return popoverDimensions.height - elDimensions.height / 2 - caretDimensions.height / 2 - 1;
        }
        if (alignment === 'center') {
          return popoverDimensions.height / 2 - caretDimensions.height / 2 - 1;
        }
      },

      calculateHorizontalCaret: function calculateHorizontalCaret(elDimensions, popoverDimensions, caretDimensions, alignment) {
        if (alignment === 'left') {
          return elDimensions.width / 2 - caretDimensions.height / 2 - 1;
        }
        if (alignment === 'right') {
          return popoverDimensions.width - elDimensions.width / 2 - caretDimensions.height / 2 - 1;
        }
        if (alignment === 'center') {
          return popoverDimensions.width / 2 - caretDimensions.height / 2 - 1;
        }
      },

      calculateHorizontalAlignment: function calculateHorizontalAlignment(elDimensions, popoverDimensions, alignment) {
        if (alignment === 'left') {
          return elDimensions.left;
        }
        if (alignment === 'right') {
          return elDimensions.left + elDimensions.width - popoverDimensions.width;
        }
        if (alignment === 'center') {
          return elDimensions.left + elDimensions.width / 2 - popoverDimensions.width / 2;
        }
      }

    };
  }

  return {
    setters: [],
    execute: function () {
      ;
    }
  };
});