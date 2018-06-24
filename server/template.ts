export const html = ({ body, title, styles, initialData }) => `
  <!DOCTYPE html>
  <html>
    <head>
      <title>${title}</title>
      ${styles}
    </head>
    <body style="margin:0">
      <div id="root">${body}</div>
      <script>window.__initialData__ = ${JSON.stringify(initialData)}</script>
      <script src="/bundle.js"></script>
    </body>
  </html>
`;