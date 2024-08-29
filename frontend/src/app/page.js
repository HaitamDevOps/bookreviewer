import Card from "@/components/Card";

export default function app() {
  return (
    <div>
    Hello World!

    <Card id= {2}
      title= "Test"
      author= "Test Author"
      language= "FR"
      img={`https://picsum.photos/500/400/?dd`} />

    </div>
  );
}
