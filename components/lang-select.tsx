"use client";

import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

// Contents
const contentLanguages = [
  {
    id: 1,
    lang: "Mandarin",
    code: "zh-CN",
  },
  {
    id: 2,
    lang: "Hindi",
    code: "hi-IN",
  },
  {
    id: 3,
    lang: "English",
    code: "en-US",
  },
  {
    id: 4,
    lang: "Bahasa",
    code: "id-ID",
  },
  {
    id: 5,
    lang: "Urdu",
    code: "ur-PK",
  },
  {
    id: 6,
    lang: "Portuguese",
    code: "pt-BR",
  },
  {
    id: 7,
    lang: "Russian",
    code: "ru-RU",
  },
  {
    id: 8,
    lang: "Spanish",
    code: "es-MX",
  },
  {
    id: 9,
    lang: "Japanese",
    code: "ja-JP",
  },
  {
    id: 10,
    lang: "German",
    code: "de-DE",
  },
  {
    id: 11,
    lang: "French",
    code: "fr-FR",
  },
];

const SelectLanguage = () => {
  const [language, setLanguage] = useState("Bahasa");

  return (
    <Select value={language} onValueChange={setLanguage}>
      <SelectTrigger
        className={cn(
          buttonVariants({
            variant: "outline",
            size: "sm",
            className: "justify-between gap-2 text-xs text-muted-foreground",
          }),
        )}
      >
        <SelectValue placeholder="Select language..." />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {contentLanguages?.map((item) => (
            <SelectItem
              key={item.id}
              value={item.lang}
              className="text-xs text-muted-foreground"
            >
              {item.lang}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectLanguage;
