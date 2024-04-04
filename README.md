# Overview
This is my personal dotfiles. The project is provided free to use with NO WARRANTY.
Breaking changes may be introduced any moment, use at your own (and my own) risk.

# Supported OS
Only tested on Arch.
It shoulds work with others as long as you've installed all the dependencies. Try at your own risk.

# Install
1. Install dependencies
   List of dependencies
   - git
   - nvim
   - hyprland
   - hyprpaper
   - hypridle
   - hyprlock
   - wlogout
   - kitty
   - thunar
   - waybar
   - wofi
   - dunst
   - brightnessctl
   - polkit-gnome
   - iwgtk
   - blueman

   This list may not be exhausive. It's only here to remind myself in case I miss something. Go figure out how to install any of this yourself too.
2. Download the dotfiles
    ```bash
    git clone git@github.com:TheA4Paper/.dotfiles.git
    cd .dotfiles
   ```
    Running these in Home Directory is recommened. Otherwise you will have to adopt the linking process accordingly.
3. Link the dotfiles
   ```bash
    stow .
   ```
   ...Pray it works.
   This command simply link all the dotfies to their respective location. You have to take care of the dependencies yourself.
   ...Or just delete the bits that use the packages you don't have
5. Enjoy. Hopefully nothing breaks. If it does... you've made a backup, right? ...Right?
