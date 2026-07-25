import Button from "@/components/button";
import Input from "@/components/input";
import Label from "@/components/label";
import Select from "@/components/select";
import { categories, types } from "@/lib/consts";

export default function TransactionForm() {
  return (
    <form className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Label className="mb-1">Type</Label>
        <Select>
          {types.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Label className="mb-1">Categories</Label>
        <Select>
          {categories.map((categorie) => (
            <option key={categorie}>{categorie}</option>
          ))}
        </Select>
      </div>

      <div className="mb-1">
        <Label>Date</Label>
        <Input type="number" />
      </div>

      <div className="col-span-2">
        <Label>Amount</Label>
        <Input type="number" />
      </div>

      <div className="flx justify-end">
        <Button type='submit'>Save</Button>
      </div>
    </form>
  );
}
