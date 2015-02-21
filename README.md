## Description
This plugin allows you to use placeholders as labels in your Bootstrap forms. Its original idea of [Float Label](https://dribbble.com/shots/1254439--GIF-Float-Label-Form-Interaction) belongs to [Matt D. Smith](https://dribbble.com/mds).
I was inspired by [clubdesign's Floatlabels](http://clubdesign.github.io/floatlabels.js/), although there are some differences:
* It fully supports Bootstrap ~> 3.0
* No markup changes required if used with Bootstrap
* It uses `:before` pseudo-element instead of adding its own element for label
* All styles are in `src/labelholder.less` file, easily customizable for non-default form padding values
* It does not change element's height causing the whole page content to go a bit down
* And it does not require you to use non-equal paddings

## Installation
Assuming you already have a bootstrap form:
* Include `labelholder.js` after jQuery script tag
* Include `labelholder.css` after bootstrap styles, but before your own style overrides
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

If you use LESS and you want to precompile it with your own padding variables set, import only `src/less/labelholder` file:

```less
  @import "bootstrap_and_overrides";
  @import "src/less/labelholder";
```

It will take your padding variables from overrides and apply them, instead of Bootstrap defaults, which are also stored in `src/less/variables.less` file.

## Usage and configuration
Just call `.labelholder()` on all your input wrappers (for Bootstrap, it's `.form-group`, and `.input-group`. Don't forget to add a placeholder!

```html
  <div class="form-group labelholder">
    <input class="form-control" type="text" placeholder="Try typing here...">
  </div>
```

```javascript
  $('.labelholder').labelholder()
```

### Custom floating label
If you want to have floating label text to be different from placeholder, then add `data-label` attribute to wrapping `div`. Example:

```html
  <div class="form-group labelholder" data-label="See how it works?">
    <input class="form-control" type="text" placeholder="Try typing here...">
  </div>
```

```javascript
  $('.labelholder').labelholder()
```

### Custom change events
There are three events which are listened to by default: `keyup`, `blur`, `change`. Just pass your own string `events` option with a list to your `labelholder()` call:

```javascript
  $('.labelholder').labelholder({ events: 'keyup custom_event' })
```

### Custom elements
Labelholder is being attached to `input[type=text], input[type=date], textarea`. If you want to add other input types, just pass custom your input types as a string in a `elements` option:

```javascript
  $('.labelholder').labelholder({ elements: 'input[type=text], input[type=date], input[type=email], textarea' })
```

## Contributing

Check [CONTRIBUTING.md](https://github.com/Borzik/labelholder/blob/master/CONTRIBUTING.md) for more information.

## License

[MIT License](http://felixborzik.mit-license.org/) © Felix Borzik
