# Yuxing Huang’s academic website

A single-page academic website hosted at [yuxingmath.github.io](https://yuxingmath.github.io/), built with Jekyll for GitHub Pages.

The page has a profile sidebar, a short biography, and three anchor-linked sections: Preprints, Publications, and Teaching. Light purple accents complement the simple layout. Names and affiliations are not repeated in a header or footer.

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

Paper entries use `category: preprints`, `category: journals`, or `category: conferences`. The Publications section combines journals and conferences. Set `coauthors` to the other authors, keeping their order, and `year` to the work's year, displayed after the coauthors. For a forthcoming article, retain its preprint year without inventing a journal publication date. Titles link directly to the proceedings when available, otherwise to the paper. Journal entries can specify `venue` and `status`. The Principal-Agent preprint is linked to arXiv:2608.22818; the signature paper is listed as forthcoming in The Annals of Applied Probability, as confirmed by the journal's future-papers list.

The skewness paper appears in Publications with its ICLR 2025 venue. Its old URL still redirects to the ICLR proceedings. The previous `#journal-publications` anchor remains valid on the Publications heading.

Teaching entries in `_data/teaching.yml` specify the course title, code, role, level, and term. The current entry records Mathematics in Financial Engineering (FRE-UY 3523 A), Fall 2026, as an undergraduate course with the Teaching Assistant role.

Old About, CV, Contact, Research, Teaching, and paper URLs are redirect-only compatibility routes. They do not create additional content pages. The 404 page provides a way back to the homepage.

## Build

With Ruby and Bundler installed:

```sh
bundle install
bundle exec jekyll serve
```

For a production build, run `bundle exec jekyll build`. Check the three section anchors, paper links, mobile layout, and old-URL redirects before merging. No JavaScript is required by the page.

GitHub Pages publishes from the configured repository branch. This repository began with the Academic Pages template; its MIT license is retained in `LICENSE`.
