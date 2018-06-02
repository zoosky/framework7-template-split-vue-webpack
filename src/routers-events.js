export default {
  pageAfterIn: (e, page) => {
    // do something after page gets into the view
    console.log("pageAfterIn: ", page.route.url, e.type, page);
  },
  pageInit: (e, page) => {
    // do something when page initialized
    console.log("pageInit: ", page.route.url, e.type, page);
  }
};
