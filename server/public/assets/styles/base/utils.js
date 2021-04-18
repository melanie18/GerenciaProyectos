const utils = (() => {
    const $ = jQuery;
    let currentScroll = 0;

    const blockScrollPage = () => {
      currentScroll = $(window).scrollTop();
      $('body').css('top', -(document.documentElement.scrollTop) + 'px').addClass('no-scroll');
    }

    const unBlockScrollPage = () => {
      $('body').removeClass('no-scroll');
      $(window).scrollTop(currentScroll);
    }

    return {
      blockScrollPage: blockScrollPage,
      unBlockScrollPage: unBlockScrollPage
    };
})();
  