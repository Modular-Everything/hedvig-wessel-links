const settings = {
  "name": "hedvig-wessel-links",
  "state": {
    "frontity": {
      "url": "https://hedvigwessel.no",
      "title": "Hedvig Wessel Links",
      "description": "Linktree for Hedvig Wessel."
    }
  },
  "packages": [
    {
      name: 'hw',
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://hedvigwessel.no"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
