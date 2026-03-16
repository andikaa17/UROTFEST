export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Meta viewport wajib untuk tampilan mobile */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>{children}</body>
    </html>
  );
}
