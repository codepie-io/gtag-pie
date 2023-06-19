import { useGtagPie } from "./useGtagPie"

export function useGtagPieTrackEvent(
  eventName: (string & {}),
  eventParams?: Record<string, any>,
) {
  useGtagPie()('event', eventName, eventParams)
}
