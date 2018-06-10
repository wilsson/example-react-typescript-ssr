export const html = ({ body, title, styles }) => `
  <!DOCTYPE html>
  <html>
    <head>
      <title>${title}</title>
      ${styles}
    </head>
    <body style="margin:0">
      <div id="root">${body}</div>
      <script src="/bundle.js"></script>
    </body>
  </html>
`;