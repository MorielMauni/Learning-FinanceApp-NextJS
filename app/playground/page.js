import PageHeader from "@/components/header";
import Trend from "@/components/trend";

export default function playground() {
  return (
    <main className="space-y-8">
      <h1 className="text-4xl mt-8">Playground</h1>

      <div>
        <h2 className="mb-4 text-lg font-mono">PageHeader</h2>
        <hr className="mb-4 border-grey-200 dark:border-gray-800"></hr>
        <div>
          <PageHeader/>
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-lg font-mono">Trend</h2>
        <hr className="mb-4 border-grey-200 dark:border-gray-800"></hr>
        <div className="flex space-x-8">
          <Trend type="Income" amount={1000} prevAmount={900}/>
          <Trend type="Expense" amount={1200} prevAmount={10000}/>
          <Trend type="Investment" amount={7000} prevAmount={11100}/>
          <Trend type="Saving" amount={500} prevAmount={950}/>
        </div>
      </div>
    </main>
  );
}
