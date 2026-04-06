export default function Display({ num }: { num: string }) {
  return (
    <div className="h-20 bg-gray-400 text-5xl text-right">
      {num.length > 1 && num[0] === "0" && num[1] !== "."
        ? num.slice(1)
        : num || "0"}
    </div>
  );
}
