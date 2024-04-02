#!/bin/bash
ln -sf ~/.dotfiles/hypr ~/.config/hypr
ln -sf ~/.dotfiles/kitty ~/.config/kitty
ln -sf ~/.dotfiles/bash/bashrc ~/.bashrc
mkdir -p ~/Pictures/wallpapers
ln -sf ~/.dotfiles/wallpapers ~/Pictures/wallpapers/hypr
echo -e "0 8    * * *   root " | sudo ln -sf ~/.dotfiles/nvim/sysinit.vim /etc/xdg/nvim/sysinit.vim
