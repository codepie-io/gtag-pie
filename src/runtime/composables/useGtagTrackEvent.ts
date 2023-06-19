import { useGtag } from "./useGtag"

export function useGtagTrackEvent(
  eventName: (string & {}),
  eventParams?: Record<string, any>,
) {
  useGtag()('event', eventName, eventParams)
}
