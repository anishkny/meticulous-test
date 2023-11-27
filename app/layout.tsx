export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          data-project-id="PO4urFxglmHGnHwn6CguApeprSgQkWvqdxkZie92"
          src="https://snippet.meticulous.ai/v1/meticulous.js"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
