import LiveClock from "@/app/components/LiveClock";

export default function Footer() {
  return (
    <footer className="mt-auto flex flex-row items-end justify-between gap-3 px-[12px] pt-[48px] pb-6">
      <LiveClock />
      <span className="font-normal text-[12px] leading-[14px] text-black/40">
        &copy; 2026 All Rights Reserved
      </span>
    </footer>
  );
}
