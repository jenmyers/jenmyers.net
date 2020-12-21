---
title:        Using Twitter Cards with a Jekyll Site
date:         2019-02-23
author:       Jen Myers
category:     notes
layout:       post
description:  How to implement auto-generated Twitter card tags in Jekyll
redirect_from: /daily/2019-02-23-using-twitter-cards-with-a-jekyll-site.html
---

It took far too long to occur to me that the image and text previews for links that showed up on Twitter were not in fact some bit of inscrutable and fickle Twitter magic but technical factors which I, a humble web developer, could control. But when it did finally occur to me, I managed to figure out fairly quickly how to control them.

<!-- more -->

The basics of Twitter Cards are not that complicated. They rely on _meta_ tags in the _head_ of an HTML file. If you've written _meta_ tags before to tell search engines what the title of your webpage is, you've got the concept. (If this is new to you, check out the [Mozilla Developer Network's guide to what metadata goes in the _head_ section of an HTML file](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML).)

The Twitter-specific metatags define information that Twitter looks for when pulling in a link, including things like the linked page's title, description and associated image. So when you post a link to your website on Twitter, readers get a nice photo and text preview, rather than just a plain URL. The Twitter developer docs have robust [guide to getting started with Twitter cards](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/guides/getting-started.html).

However, the trick with Twitter card metatags isn't just including them in an HTML page. Most likely you won't be tweeting links to your website home, you'll be directing readers to a particular page or post. Which most likely means implementing metatags in a content management system that attaches the correct information to each individual page or post. Since I use [Jekyll](https://jekyllrb.com/) to power my own website, I had to figure out how to write Jekyll-aware variables and conditionals that would pull in the right bits and pieces.

The final markup I wrote looks something like this:

<script src="https://gist.github.com/jenmyers/34b2118c2f474dd40a9cf3bc58840948.js"></script>

If you also use Jekyll, you can use this as a template for your own Twitter card metatags. Drop all of it in the _head.html_ in your _includes_ folder, and make adjustments as needed.

The first two metatags define which type of Twitter card you want (check the Twitter developer docs for the available options—here I'm using the largest image option) and your Twitter username as an author handle. The rest of the metatags reflect the material from your web pages. My pages' titles, descriptions, image paths are defined with [Jekyll front matter](https://jekyllrb.com/docs/front-matter/) in each page. In the markup above, a series of Jekyll _if_ statements determine whether or not all of that specific information is available for each page. If not, it provides default information. For example, if I don't have an image defined for a post, Jekyll will know to fall back on my default image that I use across pages. That way at least something will show up as a Twitter preview. For your own website, you can adjust image paths and swap in or out the terms you use to define your own titles, descriptions and/or images.

To make sure your metatags are working the way you want, you can test your URLs with the [Twitter Card Validator](https://cards-dev.twitter.com/validator). On the right of that page, you'll see a preview of what the link will look like on Twitter—hopefully complete with image and descriptive text. And you'll never feel subject to the whims and fancies of Twitter link preview magic ever again.
