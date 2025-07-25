import Image from "./Image";

export default function Footer() {
  return (
    <div className="h-auto max-w-[1500px] relative flex flex-col justify-center px-5 lg:px-10 py-10 w-full">
      <footer>
        <div className="container mx-auto">
          <div className="lg:flex w-full justify-center gap-4">
            <Image
              src="/logo/logo.png"
              alt=""
              width={500}
              height={250}
              className="h-12 w-max object-contain"
            />
            <Image
              src="/logo/logoEx.png"
              alt=""
              width={500}
              height={250}
              className="h-12 w-max object-contain"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}
