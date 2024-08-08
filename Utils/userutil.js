function getLevelUrl(level) {
  const urls = {
    1: {
      url: "http://level1.com",
    },
    2: {
      url: "http://level2.com",
    },
    3: {
      url: "http://level3.com",
    },
  };

  return urls[level].url;
}

module.exports = { getLevelUrl };
