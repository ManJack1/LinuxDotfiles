
set -U fish_greeting

if status is-interactive
    # Commands to run in interactive sessions can go here
end

set -g theme_color_scheme dracula
set -g fish_prompt_pwd_dir_length 1

# 这里设置了许多高亮选项
set -g fish_color_autosuggestion 555 brblack
set -g fish_color_valid_path --underline

alias r ranger

alias :q exit


set -x http_proxy http://127.0.0.1:15732
set -x https_proxy http://127.0.0.1:15732
