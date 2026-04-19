import { useCurrentTime } from "../hooks/useCurrentTime";
import { usePersistentToggle } from "../hooks/usePersistentToggle";
import { formatClockDate, formatClockTime } from "../lib/formatters";

export function DigitalClockCard() {
  const time = useCurrentTime();
  const [showDate, setShowDate] = usePersistentToggle("showDate", true);

  return (
    <section className="text-center">
      <button
        type="button"
        onClick={() => setShowDate((currentValue) => !currentValue)}
        className="cursor-pointer border-0 bg-transparent p-0 text-white focus:outline-none"
        aria-pressed={showDate}
        aria-label={showDate ? "Hide the date" : "Show the date"}
      >
        <p className="text-[48px] leading-none text-white sm:text-[64px]">
          {formatClockTime(time)}
        </p>
      </button>
      {showDate ? (
        <p className="mt-[10px] text-[24px] text-white sm:text-[32px]">
          {formatClockDate(time)}
        </p>
      ) : null}
    </section>
  );
}
