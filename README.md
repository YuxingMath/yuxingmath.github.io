# Yuxing Huang’s academic website

A single-page academic website hosted at [yuxingmath.github.io](https://yuxingmath.github.io/), built with Jekyll for GitHub Pages.

The page has a profile sidebar, a short biography, and three anchor-linked sections: Preprints, Journal publications, and Teaching. Light purple accents complement the simple layout. Names and affiliations are not repeated in a header or footer.

## Editing

| Content | File |
| --- | --- |
| Biography | `_pages/about.md` |
| Page sections | `_layouts/home.html` |
| Section links | `_data/navigation.yml` |
| Papers | `_publications/` |
| Teaching entries | `_data/teaching.yml` |
| Profile links and portrait | `_config.yml` |
| Layout and colours | `_layouts/academic.html`, `assets/css/academic.css` |

Paper entries use `category: preprints` or `category: journals`. Set `coauthors` to the other authors, keeping their order. Titles link directly to the paper. Journal entries can specify `venue` and `status`; do not invent a publication year for forthcoming articles. The Principal-Agent preprint is linked to arXiv:2608.22818; the signature paper is listed as forthcoming in The Annals of Applied Probability, as confirmed by the journal's future-papers list.

The conference paper remains in the repository and its old URL redirects to the ICLR proceedings. It is not misclassified as a journal publication or listed under a fourth section.

Teaching currently records the confirmed TA role. Add `course` and `term` to entries in `_data/teaching.yml` when those details are available.

Old About, CV, Contact, Research, Teaching, and paper URLs are redirect-only compatibility routes. They do not create additional content pages. The 404 page provides a way back to the homepage.

## Build

With Ruby and Bundler installed:

```sh
bundle install
bundle exec jekyll serve
```

For a production build, run `bundle exec jekyll build`. Check the three section anchors, paper links, mobile layout, and old-URL redirects before merging. No JavaScript is required by the page.

GitHub Pages publishes from the configured repository branch. This repository began with the Academic Pages template; its MIT license is retained in `LICENSE`.
