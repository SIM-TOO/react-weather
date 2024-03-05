// readonly 읽기만 가능

export interface CityOption {
  readonly value: string;
  readonly label: string;
}

export const cityOptions: readonly CityOption[] = [
  { value: "Seoul", label: "Seoul" },
  { value: "Busan", label: "Busan" },
  { value: "London", label: "London" },
  { value: "New York", label: "New York" },
];


