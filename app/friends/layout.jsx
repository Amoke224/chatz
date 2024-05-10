import Nav from "./_components/Nav";

export default async function RootLayout({ children }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
    </>
  );
}
