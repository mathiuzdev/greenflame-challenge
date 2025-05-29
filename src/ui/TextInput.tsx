export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  containerClassName?: string;
  hasError?: boolean;
  error?: string;
}

export const TextInput = ({
  className,
  containerClassName,
  hasError,
  error,
  ...props
}: TextInputProps) => {
  hasError = hasError || !!error;

  function cn(
    ...classes: (string | undefined | { [key: string]: boolean })[]
  ): string {
    return classes
      .flatMap((cls) => {
        if (!cls) return [];
        if (typeof cls === "string") return [cls];
        return Object.entries(cls)
          .filter(([_, value]) => value)
          .map(([key]) => key);
      })
      .join(" ");
  }

  return (
    <div className={cn(containerClassName)}>
      <input
        type="text"
        className={cn(
          "bg-custom-gray-100 text-xsm text-custom-gray-800 disabled:bg-custom-gray-200 w-full rounded-md px-3.5 py-3 font-medium transition focus:outline-2",
          {
            "outline-2 outline-custom-red": hasError,
            "outline-primary-udr": !hasError,
          },
          className
        )}
        {...props}
      />
      {error && <p className="text-custom-red text-xsm mt-1.5">{error}</p>}
    </div>
  );
};
