import Link from 'next/link';
import Image from 'next/image';
import {
  // Avatar, 
  DioneProtocolIcon,
} from 'assets';

const Footer = () => (
  <footer className="py-16 xl:px-16 lg:px-8 lg:border-t lg:border-[#ffffff1a] w-full">
    <div className="max-w-full gap-5 lg:gap-0 py-2 md:py-0 px-0 md:px-0 mx-auto">
      <div className="flex gap-6 lg:gap-12 xl:gap-20 flex-col lg:flex-row items-stretch lg:items-center">
        <div className="flex items-center justify-center md:text-xs text-sm gap-4 min-w-[135px] lg:h-9 flex-col lg:flex-row pb-6 lg:pb-0 font-medium md:font-normal border-b border-[#ffffff1a] lg:border-b-0">
          <Link href="/" className="flex">
            <div className="flex items-center flex-shrink-0">
              <Image src={DioneProtocolIcon} alt="logo" width={48} height={48} />
            </div>
          </Link>
          <span className="text-sm font-medium text-slate-50">Powered by Dione Protocol</span>
        </div>
        <span className="flex flex-1 items-center text-center text-slate-50 justify-center  text-xs font-medium order-4 lg:order-none">© 2023 Dione Protocol. All rights reserved.</span>
        <div className="flex gap-6 items-center pb-6 lg:pb-0 flex-col-reverse lg:flex-row border-b border-[#ffffff0d] lg:border-b-0">
          <a href="https://form.jotform.com/232265460131446" target="_blank" rel="noreferrer noopener" className="text-sm md:text-xs no-underline text-center text-slate-50 font-bold md:font-normal">Report an Issue</a>
          <span className="text-lightish-20 text-xs hidden lg:flex">|</span>
          <div className="text-sm md:text-xs no-underline text-center text-slate-50 font-bold md:font-normal cursor-pointer">Bridge Audit Report</div>
        </div>
      </div>
    </div>
  </footer>
);

export { Footer };
