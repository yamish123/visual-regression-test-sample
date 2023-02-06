import React, { useEffect, useState } from "react";
import { SingleComboBox } from "smarthr-ui";

type Country = {
  value: string;
  label: string;
};

export const CountriesSearchCombobox: React.FC = () => {
  const [selectableItems, setSelectableItems] = useState<Country[]>([]);
  const [selectedItem, setSelectedItem] = useState<Country | null>(null);

  useEffect(() => {
    fetch("/api/countries").then((res) =>
      res.json().then((data) => setSelectableItems(data))
    );
  }, []);

  return (
    <SingleComboBox
      items={selectableItems}
      selectedItem={selectedItem}
      onSelect={(item) => setSelectedItem(item)}
    />
  );
};
