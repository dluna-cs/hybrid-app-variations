module.exports = (targetOptions, indexHtml) => {
    return indexHtml.replace(/type="module"/g, '');
  };