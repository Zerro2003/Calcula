export default function Display(prop: { num: string }) {
  return (
    <div className="h-20 mx-[31.5rem] bg-gray-400 text-3xl text-right">
      {prop.num}
    </div>
  );
}
