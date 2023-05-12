## Instructions
Install

`npm install`

Launch dev server

`npm start`

open [http://localhost:5000](http://localhost:5000)

Build static version

`npm build`

It will create a `build` directory

Test

`npm test`

##  TODO
- aria-expanded attribute for menu
- better burger button, svg with fallback on png
- convert font in woff and eot
- try font-loader https://github.com/izaakschroeder/font-loader
- try https://github.com/bramstein/fontfaceobserver
- add eslint
- add more unit tests
- optimize with WebPageTest or similar
- add flex polyfills for old IE version
- svg logo?
- burger icon svg?


## Accessibility

Reference: [Inclusive design patterns](https://www.smashingmagazine.com/inclusive-design-patterns/)

## Styling

I very partially applied some of the principles and rules I came up with my [Bandit](http://bandit-css.herokuapp.com) methodology.

- Encapsulate module styles using a unique selector prefix
- Flat hierarchy of class based selectors
- Use variables for everything
- No key selectors outside the module they belong to
- Don’t nest selectors when it’s not necessary
- Avoid type selectors

Didn't applied:
- [Separate skin and structure](http://bandit-css.herokuapp.com/#/39)
