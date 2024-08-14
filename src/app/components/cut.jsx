import Image from 'next/image';

export default function Example() {
  return (
    <Image
      src="/img/linecut.gif"
      alt="Google สายเทา"
      width={1200}
      height={3}
      loading="lazy"
      className='cut'
    />
  );
}
