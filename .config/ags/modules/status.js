const network = await Service.import('network')

function box(monitor = 0) {
    const date = Variable("", {
        poll: [1000, 'date "+%H:%M:%S"'],
    })

    function clock(){
        return Widget.Label({
            class_name: "clock",
            label: date.bind(),
            xalign: 0,
        })
    }

    function connection(){
        const internet = () => Widget.Label({
            label: network.wifi.bind('ssid')
            .as(ssid => ssid || 'Unknown'),
        })
        return Widget.Box({
            class_name: "connection",
            children: [
                internet(),
            ]
        })
    }

    return Widget.Box({
        class_name: "widgetbox",
        vertical: true,
        hpack: 'start',
        children: [
            clock(),
            connection()
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