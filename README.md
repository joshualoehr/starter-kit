# starter-kit

This is a small JavaScript development environment starter kit created for my own personal use on my projects. It's intended to be as lightweight as possible, and tailored to my own personal preferences. This kit is also not geared towards production deployment, and should not be used for such.

Inspired by Cory House's PluralSight course, "Building a JavaScript Development Environment," but implemented with my own flavor. 

## Why?

I'm tired of using `create-react-app` everytime I want to hack on a small project idea, and getting a bloated mess of boilerplate when, in reality, I probably only need half of what it provides. Plus, I wanted to actually understand what my starter kit was doing, instead of blindly relying on someone else's work. Mostly though, I did this to learn what exactly it takes to spin up a modern JavaScript project from the ground up.

## Overview

Here's a list of this starter-kit's components, and some reasoning for including them:

* `.editorconfig` - A no-brainer. This keeps my code looking my code, which I like.
* `npm` - I already know how to use it, it's ubiquitous, it gives me everything I need. Easy.
* `browser-sync` - Allows accessing localhost from other devices on the same network. Useful for testing development work on my phone.
* `npm scripts` - Very simple task automation, baked right into the package.json. I use this to automatically run `npm audit` after `npm install`, among other things.
* `babel` - Transpiles ES6+ into browser compatible JavaScript. Typically quick to adopt experimental features, which makes it a good choice for this starter-kit.
* `webpack` - Maybe not the most lightweight option, but I picked this because of its wide adoption and its comprehensive bundling features for more than just JavaScript (HTML, CSS, images, fonts, etc).
* `eslint`, `eslint-config-airbnb` - ESLint is the de facto standard for JavaScript linting these days, so this was another no-brainer. I also use AirBnB's coding standards because that's what I've been using for the last several years at work, and I'm not picky enough to switch it up right now.


## Future Considerations

Some things I may consider adding in the future:

* `localtunnel` - Allows localhost to be publicly accessible. Could be helpful for collaborating. (Alternative: `ngrok`)
* `TypeScript` or `Elm` - I might consider trying out these other transpiled languages in the future.

