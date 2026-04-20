import LiveClock from "@/app/components/LiveClock";

export default function Footer() {
  return (
    <footer className="flex flex-row items-end px-[11px] pt-[91px] pb-3 gap-[11.5px]">
      <div className="md:w-[615px]"><LiveClock /></div>
      <div className="md:w-[630px]"><span className="font-normal text-[12px] leading-[14px] text-black/40">&copy; 2026 All Rights Reserved</span></div>
    </footer>
  );
}
