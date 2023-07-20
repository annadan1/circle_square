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
  [key: string]: any | never;
}

const rules: Rules = {
  form: ["circle", "square"],
  color: ["red", "green", "blue", "yellow"],
  dark: [true, false],
};

const validate = (item: Item) => {
  for (let rule in rules) {
    const key = rule as keyof Rules;
    if (!item.hasOwnProperty(key)) return false;
    if (!rules[key].includes(item[key] as never)) return false;
  }
  return true;
};

export const useValidate = (items: Item[]) => {
  return items.filter((el) => validate(el));
};
