# Free Law Founders Website

## Editing

Simply click on the `.md` file for the page you want to edit,
and then click the "Edit" button on the tabbed navigation for that
file.  We're using [GitHub Markdown](https://help.github.com/articles/github-flavored-markdown)
to render the site.

## Creating a page

To create a new page, simply add a new file by clicking the **+** next to
` free-law-founders-site / ` at the top of the GitHub repo,
name the file appropriately (`page-name.md`) and edit it to add to the repo.

All pages need the following header, with a proper `title` set, and the
`permalink` url the page should appear at.

```
---
layout: page
title: "Terms of Use"
permalink: "terms-of-use/"
---
{% include JB/setup %}

Your content goes here.
```

## Menu links
To add a link to the main menu, simply add it to the `topbar` list in
[_config.yml](./_config.yml)



## Credits

This site was with Jekyll Bootstrap http://jekyllbootstrap.com

Featuring photos by:

* [Daniel Schwen](http://commons.wikimedia.org/wiki/User:Dschwen) (New York City skyline)
* [Ronile](http://pixabay.com/en/users/Ronile/) (New York City skyline)

## License

[Creative Commons BY-NC-SA](http://creativecommons.org/licenses/by-nc-sa/3.0/)
