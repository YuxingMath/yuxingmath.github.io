# Yuxing Huang’s academic website

Personal website for Yuxing Huang, a Ph.D. student in mathematical finance at New York University.

**Website:** [yuxingmath.github.io](https://yuxingmath.github.io/)

The site uses Jekyll and is hosted on GitHub Pages. Its layout is designed for readable academic content on desktop and mobile, with dedicated research, CV, and contact pages.

## Editing content

| Content | File |
| --- | --- |
| Biography and research interests | `_pages/about.md` |
| Research page | `_pages/publications.html` |
| CV | `_pages/cv.md` |
| Contact details | `_pages/contact.md` |
| Publication entries | `_publications/` |
| Site identity and author details | `_config.yml` |
| Navigation | `_data/navigation.yml` |
| Structured CV data | `_data/cv.json` |

Publication entries are Markdown files with YAML front matter. Keep existing filenames so that links to individual papers remain stable. A new entry can follow this structure:

```yaml
---
layout: publication
title: "Paper title"
collection: publications
category: preprints
date: YYYY-MM-DD
year: YYYY
authors: "Author One, **Yuxing Huang**"
venue: "Preprint"
paperurl: "https://arxiv.org/abs/…"
summary: "A short description of the paper."
---

A concise overview of the paper.
```

Use `category: conferences` for conference papers. Add `proceedingsurl` when an official proceedings page is available. Use confirmed publication details and avoid placeholder links or unsupported dates.

The CV page can be printed or saved as a PDF using its print button. Update `_data/cv.json` alongside the visible CV if the academic background changes.

## Preview locally

With Ruby and Bundler installed:

```sh
bundle install
bundle exec jekyll serve
```

Open `http://localhost:4000`. To check a production build:

```sh
bundle exec jekyll build
```

Check the homepage, research, individual papers, CV, contact, and 404 page at both desktop and mobile widths. Confirm that internal links and publication links work before merging changes.

## Deployment

GitHub Pages publishes the site from the configured repository branch. Deployment status is available in the repository’s Actions tab. The canonical public address is `https://yuxingmath.github.io/`.

## Credits

This repository began with the [Academic Pages](https://github.com/academicpages/academicpages.github.io) template. The original MIT license is retained in `LICENSE`.
