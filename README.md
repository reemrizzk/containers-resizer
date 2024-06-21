# containers-resizer
A simple lightweight containers resizer handle with javascript. It allows you to easily set up resizable boundaries between two HTML elements either horizontally or vertically.

## Features

- **Resizable Containers**: Drag and resize containers by specifying two elements and the orientation (`horizontal` or `vertical`).
- **Customizable**: Set minimum length for containers and background colors.
- **Easy Integration**: Simple API for quick integration into your web applications.

## Demo

Check out the [Demo file](demo/demo.html) to see `containers-resizer.js` in action.

## Installation

You can install the library via npm:

```bash
npm install containers-resizer
```

Or by including the CDN link:

```html
<script src="https://cdn.jsdelivr.net/npm/containers-resizer@latest/dist/containers-resizer.min.js"></script>
```

## Usage example

### HTML

```html
<div class="divs-container">
  <div id="div1">Container1</div>
  <div id="resizer"></div>
  <div id="div2">Container2</div>
</div>
```

### JavaScript

```javascript
const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
document.getElementById("resizer").containersResizer({
    element1: div1,
    element2: div2,
    orientation: "horizontal"
});
```

## Options

- **orientation**: (Required) Specifies whether the resizing should be `horizontal` or `vertical`.
- **element1**: (Required) The element to the left/top of the resizer.
- **element2**: (Required) The element to the right/bottom of the resizer.
- **minLength**: (Optional) Minimum length of each container (default is 50).
- **background**: (Optional) Background color of the resizer element.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
