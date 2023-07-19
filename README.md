# Birdhouse Manufacturer Frontend

this frontend is an implementation of this [figma design](https://www.figma.com/file/HzHDAngD6aOHxUmxxeNQzF/coding-test?type=design&node-id=0%3A1&mode=dev)

## Thoughts

### Components tree

- the project is 3 different pages with some shared components
- we notice that all pages have shared title bar at the top, shared sidebar and footer (except for the home page)
- we create a layout component which have the title bar with the main styling
- the layout contains a slot for the content (which is the vue router)

### Styling

-
