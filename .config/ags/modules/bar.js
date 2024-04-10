const left = () => Widget.Box({
    children: [
        Widget.Label("This is left"),
    ],
})

const right = () => Widget.Box({
    hpack: "end",
    children: [
        Widget.Label("This is right"),
    ],
})

const center = () => Widget.Box({
    children: [
        Widget.Label("This is center"),
    ],
})

const visible = Variable(false)
export function toggleBar(){
    visible.setValue(!visible.value)
    return visible.value
}
globalThis.toggleBar = toggleBar


export function bar(monitor = 0) {
    return Widget.Window({
        name: `bar-${monitor}`,
        class_name: "bar",
        monitor,
        visible: visible.bind(),
        anchor: ["top", "left", "right"],
        layer: "overlay",
        exclusivity: "ignore",
        child: Widget.CenterBox({
            class_name: "centerbox",
            start_widget: left(),
            center_widget: center(),
            end_widget: right(),
        }),
    })
}