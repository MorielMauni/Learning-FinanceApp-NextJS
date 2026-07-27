"use client";
import Button from "@/components/button";
import Input from "@/components/input";
import Label from "@/components/label";
import Select from "@/components/select";
import { categories, types } from "@/lib/consts";
import { useForm } from "react-hook-form";

export default function TransactionForm() {
  // React-Hook-Forms
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const onSubmit = (data) => console.log(data);

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Label className="mb-1">Type</Label>
        <Select {...register("type")}>
          {types.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Label className="mb-1">Categories</Label>
        <Select {...register("categorie")}>
          {categories.map((categorie) => (
            <option key={categorie}>{categorie}</option>
          ))}
        </Select>
      </div>

      <div className="mb-1">
        <Label>Date</Label>
        <Input type="number" {...register("created_at", {
            required: "Must enter a date",
          })} />
          {errors.created_at && <p className="mt-1 text-red-600">{errors.created_at.message}</p>}
      </div>

      <div className="mb-1">
        <Label>Amount</Label>
        <Input
          type="number"
          {...register("amount", {
            required: "Must enter an amount",
            valueAsNumber: true,
            min: {value: 1, message:'Amount must be at least 1'}
          })}
        />
        {errors.amount && <p className="mt-1 text-red-600">{errors.amount.message}</p>}
      </div>

      <div className="col-span-1 md:col-span-2">
        <Label>Description</Label>
        <Input type="number" {...register("description", {
            required: "Must enter a description",
          })} />
          {errors.description && <p className="mt-1 text-red-600">{errors.description.message}</p>}
      </div>

      <div className="flx justify-end">
        <Button type="submit">Save</Button>
      </div>
    </form>
  );
}
