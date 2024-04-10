const battery = await Service.import("battery")

const batteryLevel = () => Widget.LevelBar({
    widthRequest: 100,
    value: battery.bind("percent").as(p => p / 100),
    setup: self => {
        self.hook(battery, self => {
            self.toggleClassName('charging', battery.charging)
            self.toggleClassName('low', !battery.charging && battery.percent < 20)
        })
    }
})

export function batteryBar(monitor = 0) {
    return Widget.Window({
        name: `batterybar-${monitor}`, // name has to be unique
        class_name: "batterybar",
        monitor,
        clickThrough: "true",
        keymode: "none",
        layer: "overlay",
        anchor: ["top", "left", "right"],
        exclusivity: "ignore",
        child: batteryLevel(),
    })
}