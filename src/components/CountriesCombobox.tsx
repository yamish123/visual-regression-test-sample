import React, { useEffect, useState } from "react";
import { SingleComboBox } from "smarthr-ui";

type Country = {
  value: string;
  label: string;
};

export const CountriesSearchCombobox: React.FC = () => {
  const [selectableCountries, setSelectableCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    fetch("/api/countries")
      .then((res) => {
        if (!res.ok) throw new Error(res.statusText);
        return res.json().then((data) => setSelectableCountries(data));
      })
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <SingleComboBox
      items={selectableCountries}
      selectedItem={selectedCountry}
      isLoading={isLoading}
      decorator={{
        noResultText: (t) => (isError ? "読み込みに失敗しました。" : t),
      }}
      onSelect={(item) => setSelectedCountry(item)}
    />
  );
};
