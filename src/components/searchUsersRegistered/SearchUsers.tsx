'use client'
import { viewStore } from "@/store/viewUsersRegister";
import { cn } from "@/utils/cn";
import { ChangeEvent } from "react";
import { Input } from "@/components/ui/input";

export const SearchUsers = () => {
  const { addValueSearch } = viewStore()

  const onChange = (e: ChangeEvent<any>) => {
    addValueSearch(e.target.value)
  }

  return (
    <div className="mx-auto mb-5 flex   w-1/4">
      <LabelInputContainer>
        <Input id="inputSearch" placeholder="Buscar...." type="text" onChange={onChange} />
      </LabelInputContainer>
    </div>
  )

}
const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
