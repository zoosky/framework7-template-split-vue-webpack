export default {
  pageAfterIn: (e, page) => {
    // do something after page gets into the view
    console.log("pageAfterIn: ", page.route.url, page, e);
  },
  pageInit: (e, page) => {
    // do something when page initialized
    console.log("pageInit: ", page.route.url, page, e);
  }
};
