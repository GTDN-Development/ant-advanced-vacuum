export function Card(
  props: React.ComponentProps<"div"> & { src?: string; title: string },
) {
  return (
    <div
      {...props}
      className="[clip-path:polygon(0%_0%,_100%_0%,_100%_90%,_90%_100%,_0%_100%)] bg-gray-500 h-50 w-50"
    >
      {props.src && <img src={props.src} className="w-10 h-10" />}
      <h1 className="font-bold">{props.title}</h1>
    </div>
  );
}
