type EventType = "click" | "scroll" | "mouseMove";

type ExcludeEvent = Exclude<EventType,"scroll">;

const handleEvent = (event:ExcludeEvent) => {
    console.log(`Handling event is: ${event}`)
}


handleEvent("click")