# `system-theme-react` #

`system-theme-react` is a wrapper around the *System.css* CSS library, intended for building interfaces that resemble System OS.

For more information, see the [original documentation](https://sakofchit.github.io/system.css/) or build
the storybook to preview components.


## Why? ##

Why not. 

## Getting Started ##

1. Clone the repository and install packages

   ```
   git clone ....
   npm install
   ```

2. Preview the components in storybook

   ```
   npm run storybook
   ```
   Then navigate to `http://localhost:6006/`


## Using in your project ##

```
npm install @vvvvvvvvvv-llc/system-theme-react
```

Then import whatever components you need in your `.tsx`.

```tsx
import { 
    Window,
    MenuBar,
    // etc...
} from "@vvvvvvvvvv-llc/system-theme-react";
```

See the usage in the storybook example source code for (very sloppy) examples of how to use and compose components.


## Contributing ##

I'm sure there are plenty of problems. I'm a firmware developer - this web stuff feels like it's made of duct-tape and prayers.

[Submit PRs pretty please](https://github.com/vvvvvvvvvv-LLC/system-theme-react/pulls) or if something needs to be fixed in the upstream System.css repo, [that is located here](https://github.com/sakofchit/system.css)