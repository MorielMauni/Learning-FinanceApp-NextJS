import PageHeader from "@/components/header";

export default function layout({ children }) {
  return (
    <>
      <PageHeader className='my-8'/>
      <main>{children}</main>
      <footer className="mt-auto text-center py-8">footer</footer>
    </>
  );
}
