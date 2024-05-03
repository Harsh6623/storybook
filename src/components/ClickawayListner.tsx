import {
  EventHandler,
  ReactNode,
  useEffect,
  Children,
  useRef,
  cloneElement,
  ReactElement,
} from "react";

export interface ClicawayListnerProps {
  children: ReactElement;
  onClickAway?: (event: MouseEvent) => void;
}

export default function ClickawayListner(props: ClicawayListnerProps) {
  const { children, onClickAway } = props;
  const refs = useRef<any[]>([]);

  useEffect(() => {
    if (!onClickAway) return;

    const handler = (e: MouseEvent) => {
      if (
        !refs.current.some((el) => {
          if (!el) return false;

          return e.target === el || el.contains(e.target);
        })
      ) {
        onClickAway(e);
      }
    };

    document.addEventListener("click", handler);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, [refs.current, onClickAway]);

  return Children.map(children, (child, idx) =>
    cloneElement(child, {
      ref: (ref: any) => (refs.current[idx] = ref),
    })
  );
}
