export const selectStyles = {
  option: (base: any, state: any) => ({
    ...base,
    borderBottom: "1px dotted #666",
    background: "var(--color-secondary-dark)",
    color: "var(--color-details-dark-bg)",
    padding: 10,
  }),
  control: (base: any, state: any) => ({
    ...base,
    background: "var(--color-secondary-dark)",
    borderColor: "transparent",
    "&:hover": { borderColor: "transparent", cursor: "pointer" },
    "&:focus": { borderColor: "transparent" },
  }),
  multiValue: (base: any, state: any) => {
    const background = "#666";
    const width = "auto";
    const color = "white";

    return { ...base, background, width, color };
  },
  multiValueLabel: (provided: any, state: any) => {
    const color = "white";

    return { ...provided, color };
  },
};
