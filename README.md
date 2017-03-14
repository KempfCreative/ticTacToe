# Tic-Tac-Toe MVP

## This is a minimum viable product for a tic-tac-toe webapp.

### Minimum Browser Support:

Requiring BabelJS es2015 plugin, can be transpiled to work for IE9 and above. Avoided non-transpilable ES6 native methods such as `Array.from()`

### Minimum Functionality:

HTML, CSS carry the major functionality via the `form` element and the `checkbox` input types. Player turn handling and board reset are handled via Javascript.
Adding a `submit` button for the form could automatically integrate with a server-side implementation for a true two-player, non-javascript webapp.

### Progressive Enhancement Opportunities:

UI:
*  Animations to drop in the pieces from the perspective of the user. ( Left out due to delay in interaction )
*  Replace the background image with an SVG filter ( To be worked on over time )
*  Drag and Drop functionality ( Left out due to desktop-centric UX )

Functionality:
*  Check for win condition
*  Keep track of score over time in localstorage or server-side
*  Use AJAX to submit form state and play with second player over the web
*  Pure JS implementation ( React | Left out because there is no reason for it other than to have a dynamic game )

### Timeline of work:

| Area | Time Taken |
| --- | --- |
| HTML: | 0.5 hrs |
| Javascript: | 1 hr |
| Assets: | 1.5 hrs |
| CSS: | 2.5 hrs |
| Total: | 5.5 hrs |

