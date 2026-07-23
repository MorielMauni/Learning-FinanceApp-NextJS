import PageHeader from "@/components/header";
import TransactionItem from "@/components/transaction-item";
import Trend from "@/components/trend";
import TransactionSummaryItem from "@/components/transaction-summary-item";
import Button from "@/components/button";
import Label from "@/components/label";
import Input from "@/components/input";
import Select from "@/components/select";
import Separator from "@/components/separator";
import Skeleton from "@/components/skeleton";

export default function playground() {
  return (
    <main className="space-y-8 mb-44">
      <h1 className="text-4xl mt-8">Playground</h1>

      <div>
        <h2 className="mb-4 text-lg font-mono">PageHeader</h2>
        <Separator />
        <div>
          <PageHeader />
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-lg font-mono">Trend</h2>
        <Separator />
        <div className="flex space-x-8">
          <Trend type="Income" amount={1000} prevAmount={900} />
          <Trend type="Expense" amount={1200} prevAmount={10000} />
          <Trend type="Investment" amount={7000} prevAmount={11100} />
          <Trend type="Saving" amount={500} prevAmount={950} />
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-lg font-mono">Transaction Item</h2>
        <Separator />
        <div className="space-y-4">
          <TransactionItem type="Income" desciption="Salary" amount={2000} />
          <TransactionItem
            type="Expense"
            category="Food"
            desciption="Date night"
            amount={200}
          />
          <TransactionItem
            type="Saving"
            category="Saving"
            desciption="For the kids"
            amount={300}
          />
          <TransactionItem
            type="Investment"
            category="Stocks"
            desciption="S&P"
            amount={1000}
          />
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-lg font-mono">Transaction summary + Item</h2>
        <Separator />
        <div className="space-y-4">
          <TransactionSummaryItem date="2026-12-25" amount={3500} />
          <TransactionItem type="Income" desciption="Salary" amount={2000} />
          <TransactionItem
            type="Expense"
            category="Food"
            desciption="Date night"
            amount={200}
          />
          <TransactionItem
            type="Saving"
            category="Saving"
            desciption="For the kids"
            amount={300}
          />
          <TransactionItem
            type="Investment"
            category="Stocks"
            desciption="S&P"
            amount={1000}
          />
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-lg font-mono">Buttons</h2>
        <Separator />
        <div className="space-x-4">
          <Button>Hello</Button>
          <Button variant="outline">Hello</Button>
          <Button variant="ghost">Hello</Button>
          <Button size="small">Hello</Button>
          <Button size="large">Hello</Button>
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-lg font-mono">Forms</h2>
        <Separator />
        <div className="grid grid-cols2 gap-4">
          <div>
            <Label className="mb-1">Your Name</Label>
            <Input type="test" placeholder="Type something here" />
          </div>
          <div>
            <Label className="mb-1">City</Label>
            <Select>
              <option>Pick a city</option>
              <option>Berlin</option>
              <option>Tel Aviv</option>
              <option>Joe Mama</option>
            </Select>

            <div className="flex items-center">
              <Input type="checkbox" id="terms" />
              <Label className="ml-2" htmlFor="terms">
                Accept terms
              </Label>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-lg font-mono">Loading Skeleton</h2>
        <Separator />
        <div className="space-y-8">
          <div className="flex space-x-4">
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
          <div className="space-y-4">
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
        </div>
      </div>
    </main>
  );
}
