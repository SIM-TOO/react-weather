// readonly 읽기만 가능

export interface CityOption {
  readonly value: string;
  readonly label: string;
}

export const cityOptions: readonly CityOption[] = [
  { value: "Seoul", label: "Seoul" },
  { value: "Gwangju", label: "Gwangju" },
  { value: "Busan", label: "Busan" },
  { value: "Tokyo", label: "Tokyo" },
];


