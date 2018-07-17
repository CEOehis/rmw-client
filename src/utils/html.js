/**
 * compiles html from a template
 *
 * @param {*} skeleton
 * @param {*} placeholders
 * @returns {string} html string
 */
const html = (skeleton, ...placeholders) => {
  let result = '';
  placeholders.forEach((item, i) => {
    result += skeleton[i];
    result += item;
  });
  result += skeleton[skeleton.length - 1];
  return result;
};

export default html;
