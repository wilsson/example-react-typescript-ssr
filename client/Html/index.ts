export const html = ({ body, title }) => `
  <!DOCTYPE html>
  <html>
    <head>
      <title>${title}</title>
    </head>
    <body style="margin:0">
      <div id="root">${body}</div>
      <script src="/bundle.js"></script>
    </body>
  </html>
`;