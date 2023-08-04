import { SelectOption } from '@/types/app';

export function isOptionSelected(selectedOptions: SelectOption[], option: SelectOption) {
  return selectedOptions.find((selectedOption) => selectedOption.value === option.value);
}

export function deselectOption(selectedOptions: SelectOption[], option: SelectOption) {
  return selectedOptions.filter((opt) => opt.value !== option.value);
}
