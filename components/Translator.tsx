import Image from 'next/image';
import ymcheung from '../public/translator/ymcheung.webp';

export default function Translator() {
  return (
  <>
    <h2 className="cellHeading fontDefault">關於譯者</h2>
    <figure className="d:grid grid-template-columns:80|1fr gap-x:16 margin:0|0|16 fontDefault">
      <Image src={ymcheung} className="border-radius:12" width={80} height={80} layout="fixed" alt="" />
      <figcaption>
        <strong className="inline-block margin-bottom:28 color:shade-100 f:16 line-height:1">Yuming Cheung</strong>
        <span className="block margin-bottom:4 color:shade-500 f:14 line-height:1">網站前端開發 @RE:LAB</span>
        <a className="color:shade-500 f:14 line-height:1" href="https://read.cv/ymcheung">read.cv/ymcheung</a>
      </figcaption>
    </figure>
  </>
  );
}
