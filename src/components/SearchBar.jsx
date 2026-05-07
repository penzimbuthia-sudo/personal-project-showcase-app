import { SearchIcon } from "lucide-react";

import {
  Field,
  FieldLabel,
} from "@/components/ui/field";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

export default function SearchBar({
  searchTerm,
  setSearchTerm,
}) {
  return (
    <section className="bg-search-light border border-search/20 rounded-card p-5">
      
      <Field className="w-full">
        <FieldLabel
          htmlFor="search-input"
          className="sr-only"
        >
          Search Projects
        </FieldLabel>

        <InputGroup
        style={{
          outline: "none",
          boxShadow: "none",
          border: "none",
        }}
          className="
          bg-white rounded-input overflow-hidden shadow-sm">
          <InputGroupAddon
            align="inline-start"
            className="pl-3"
          >
            <SearchIcon className="size-4 text-text-secondary" />
          </InputGroupAddon>

          <InputGroupInput
            id="search-input"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(e.target.value)
            }
             style={{
                outline: "none",
                boxShadow: "none",
                border: "none",
              }}

            className=" bg-search-light border-none outline-none shadow-none ring-0 text-text-main placeholder:text-text-secondary"/>
        </InputGroup>
      </Field>
    </section>
  );
}
