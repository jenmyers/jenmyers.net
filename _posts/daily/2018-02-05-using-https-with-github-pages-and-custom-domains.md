---
title:        Using HTTPS with GitHub Pages + Custom Domains
date:         2019-02-05
author:       Jen Myers
category:     daily
layout:       post-daily
image:        typist.png
image-alt:    Vintage female writer smiling from her typewriter
description:  How to set up HTTPS with an existing GitHub Pages website using a custom domain
---

Languishing on my to-to list for a while now has been migrating my GitHub Pages websites with custom domains to HTTPS. In principle, I know this is A Good Thing To Do. HTTPS is faster and more secure than HTTP, and if you want to run any sensitive information through your site at all, you need a secure protocol. To drive the point home, [Google recently announced that in summer of 2018 they will start labeling any site _not_ using HTTPS as “not secure,”](https://gizmodo.com/google-will-soon-start-shaming-all-sites-that-don-t-use-1822842705) thus shaming said sites in Google search results until they’re brought into compliance. So it’s clearly time for us all to get on board.


The reason I had been putting off doing so when it came to my own project websites is that while GitHub natively supports HTTPS for GitHub Pages sites hosted at github.io URLs, it does not provide the same easy support for Pages sites that use custom domains—which mine do. I knew that theoretically there was a way to secure sites like this, but it was murky and mysterious and easier to put off. However, once I dug into it, I realized that with the help of Cloudflare, HTTPS for GitHub Pages with custom domains is relatively simple to implement.

First, let’s confirm we’re working with a GitHub Pages site correctly configured to use a custom domain. In your chosen repository, go to the Settings page and you should see something that looks like this:

![GitHub custom domain settings]({{ site.baseurl }}/images/tutorials/https-github-setup.png "GitHub custom domain settings")

(If you need to set up a custom domain for your GitHub Pages site, you can start with this handy [GitHub Pages with custom domains guide](https://help.github.com/articles/quick-start-setting-up-a-custom-domain/). If you need to go back a step further, take a look at [GitHub Pages](https://pages.github.com/).)

Now we want to create an account with Cloudflare. At the “Add Website” prompts, enter the details of the domain you want to set up. Cloudflare will import the information it needs (for example, it will instantly bring in any existing A or CNAME records—if you have your Pages custom domain set up, you’ll have at least a CNAME record already), then ask you to go to your registrar to change your domain name settings to point at CloudFlare DNS. For those A and CNAME records imported to Cloudflare, go to the DNS tab and make sure the former points to GitHub’s IP address and the latter points to your github.io address. It will end up looking something like this:

![Cloudflare records]({{ site.baseurl }}/images/tutorials/https-records.png "Cloudflare records")

Now that we’ve got all the domain details squared away, hit the “Crypto” page on Cloudflare and make sure you’ve selected the “Full” SSL setting. Keep in mind it might take a little while (up to 24 hours) for the changes to propagate, but, for all intents and purposes, your Pages site is now available on HTTPS.

But we have one last step—we need insure that HTTPS gets forced for all requests. Right now, your site can use both HTTP and HTTPS, but we really want it to _only_ use HTTPS. We can do this in Cloudflare’s “Page Rules” section. Create a new rule and enter your domain name. I added a couple of asterisks to cover all potential subdomains and subpages. In the “Pick a Setting” dropdown, choose “Always Use HTTPS.” After you hit “Save and Deploy,” you’ll see your new rule:

![Cloudflare page rule]({{ site.baseurl }}/images/tutorials/https-page-rule.png "Cloudflare page rule")

Make sure it’s switched on!

And now your GitHub Pages site and its custom domain is HTTPS-only. Follow the steps again to set up any additional Pages sites, and cross this particular task off of your to-do list.
