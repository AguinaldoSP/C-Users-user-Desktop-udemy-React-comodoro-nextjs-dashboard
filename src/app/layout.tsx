import type { Metadata } from "next";

export const metadata: Metadata ={
  title: "The blog - Exte é um blog com Next.js",
  description: 'Esse seria a descrição desta pagina',
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <header>
          <h1>Header</h1>
        </header>
        {children}
        <footer>
          <h1>Footer</h1>
        </footer>
      </body>
    </html>
  );
}
