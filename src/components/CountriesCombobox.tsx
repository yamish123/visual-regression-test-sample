import React, { useEffect, useState } from "react";
import { SingleComboBox } from "smarthr-ui";

type Country = {
  value: string;
  label: string;
};

export const CountriesSearchCombobox: React.FC = () => {
  const [selectableItems, setSelectableItems] = useState<Country[]>([]);
  const [selectedItem, setSelectedItem] = useState<Country | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(true);
    fetch("/api/countries")
      .then((res) => res.json().then((data) => setSelectableItems(data)))
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <SingleComboBox
      items={selectableItems}
      selectedItem={selectedItem}
      isLoading={isLoading}
      decorator={{
        noResultText: (t) => (isError ? "読み込みに失敗しました。" : t),
      }}
      onSelect={(item) => setSelectedItem(item)}
    />
  );
};
