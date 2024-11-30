import { twMerge } from "tailwind-merge";

function Button({
  variant = "primary",
  text,
  onclick,
  size = "md",
  iconUrl,
  className,
}: {
  variant?: "primary" | "secondary" | "outline";
  text: string;
  onclick: () => void;
  size?: "sm" | "md" | "lg" | "full" | "auto";
  iconUrl?: string;
  className?: string;
}) {
  const buttonClasses = "font-semibold py-4 flex items-center justify-center rounded-md cursor-pointer transition-all ease-in-out";

  const primaryClasses = "bg-primary text-white border-blue-primary hover:bg-primaryShade hover:border-primaryShade";
  const secondaryClasses = "bg-white text-textDark hover:bg-gray-100";
  const outlineClasses = "bg-transparent text-white border-2 border-white  hover:opacity-75 transition-all duration-300 ";
  const sizeClasses = {
    sm: "w-24",
    md: "w-40 ",
    lg: "w-56",
    full: "w-full",
    auto: "w-auto",
  };
  const buttonStyle = twMerge(
    buttonClasses,
    variant === "primary" ? primaryClasses : variant == "outline" ? outlineClasses : secondaryClasses,
    sizeClasses[size],
    className
  );

  return (
    <button type="button" onClick={onclick} className={twMerge(buttonStyle, "flex gap-2 items-center ")}>
      <p>{text}</p>
      {iconUrl && <img src={iconUrl} alt="icon" className="w-2" />}
    </button>
  );
}

export default Button;
