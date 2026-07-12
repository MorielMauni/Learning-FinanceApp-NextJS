import PageHeader from "@/components/header";

export default function layout({ children }) {
  return (
    <>
      <PageHeader className='my-8'/>
      <main>{children}</main>
      <footer></footer>
    </>
  );
}
