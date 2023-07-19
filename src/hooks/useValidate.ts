interface Rules {
  [key: string]: string[] | boolean[];
  form: string[];
  color: string[];
  dark: boolean[] | string[];
}

interface Item {
  form: string;
  color: string;
  dark: boolean;
}

type ExpectedTypes = {
  [K in keyof Rules]: K extends keyof Item ? Item[K] : never;
};

const rules: Rules = {
  form: ["circle", "square"],
  color: ["red", "green", "blue", "yellow"],
  dark: [true, false],
};

export const useValidate = (item: ExpectedTypes): boolean => {
  for (let rule in rules) {
    const key = rule as keyof Rules;
    if (!item.hasOwnProperty(key)) return false;
    if (!rules[key].includes(item[key])) return false;
  }
  return true;
};
