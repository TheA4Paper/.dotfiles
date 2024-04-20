function box(monitor = 0) {
    const date = Variable("", {
        poll: [1000, 'date "+%H:%M:%S"'],
    })

    // function connection(){
    //     const network = Widget.Label({

    //     })
    //     return Widget.Box({

    //     })
    // }

    return Widget.Box({
        class_name: "widgetbox",
        vertical: true,
        hpack: 'start',
        children: [
            Widget.Label({
                class_name: "clock",
                label: date.bind()
            })
        ]
    })
}

export function status(monitor = 0) {
    return Widget.Window({
        name: `status-${monitor}`, // name has to be unique
        class_name: "status",
        monitor,
        clickThrough: "true",
        keymode: "none",
        layer: "bottom",
        anchor: ["top", "right"],
        exclusivity: "ignore",
        child: box(),
    })
}