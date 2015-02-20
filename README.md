## Description
This plugin allows you to use placeholders as labels in your Bootstrap forms. Its original idea of [Float Label](https://dribbble.com/shots/1254439--GIF-Float-Label-Form-Interaction) belongs to [Matt D. Smith](https://dribbble.com/mds).
I was inspired by [clubdesign's Floatlabels](http://clubdesign.github.io/floatlabels.js/), although there are some differences:
* It supports Bootstrap ~> 3.0
* No markup changes required if used with Bootstrap
* It uses :before pseudo-element
* All styles are moved to `src/labelholder.less` file
* And it's animations are a bit different

## Usage
Assuming you already have a bootstrap form:
You'll need to include `labelholder.js` AFTER jQuery script tag.
And, include `labelholder.css` after bootstrap, but before your own style overrides.
```html
  <head>
    <!-- ... -->
    <script src="jquery.js"  type="text/javascript"></script>
    <script src="labelholder.js"  type="text/javascript"></script>
    <style src="bootstrap.css" type="text/css"></style>
    <style src="labelholder.css" type="text/css"></style>
    <style src="your_styles.css" type="text/css"></style>
    <!-- ... -->
  </head>
```

If you use LESS and you want to precompile it with your own variables set, import them in next sequence:

```less
  @import "bootstrap";
  @import "labelholder";
  @import "overrides";
```

It will take your padding variables from overrides and apply them instead of bootstrap default ones.

## Contributing

Check [CONTRIBUTING.md](https://github.com/Borzik/labelholder/blob/master/CONTRIBUTING.md) for more information.

## License

[MIT License](http://felixborzik.mit-license.org/) © Felix Borzik
